import Route from './Route'
import { RepositoryConfiguration, ConfigurationInterface } from './RepositoryConfiguration'
import RegistrationError from './Error/RegistrationError'
import RequestMethodType from './RequestMethod'
import { RequestMethod } from './RequestMethod'

export default class RouteRepository
{
    routes: Map<string, Route>
    config: ConfigurationInterface
    signatures: Map<string, string>
    routePrefix: string | null

    constructor(config : ConfigurationInterface = {})
    {
        this.routes = new Map()
        this.config = new RepositoryConfiguration(config);
        this.signatures = new Map();
        this.routePrefix = null;
    }

    /**
     * Create and register a new route from parameters
     *
     */
    register(name: string, method: RequestMethodType, url: string)
    {
        return this.registerRoute(new Route(name, method, url))
    }

    /**
     * Register a new route using a route object
     *
     */
    registerRoute(route: Route)
    {
        const oldRoute = this.routes.get(route.name);

        // Check if a route with this name is already registered and thus being modified
        if(oldRoute !== undefined) {

            // Throw error if routes are immutable
            if(! this.config.mutable) {
                const msg = `Route '${route.name}' is already defined and immutable!`
                throw new RegistrationError(msg)
            }

            // If existing route is being modified, remove the old signature
            this.signatures.delete(this.routeSignature(oldRoute.method, oldRoute.url.toString()));
        }

        if(this.routePrefix !== null) {
            route.applyPrefix(this.routePrefix)
        }

        const signature = this.routeSignature(route.method, route.url.toString());
        const duplicateRoute = this.signatures.get(signature);

        if(this.config.duplicates === false && duplicateRoute !== undefined) {

            const msg = `Route '${route.name}' is a duplicate of existing route '${duplicateRoute}'. If you want to enable multiple aliases for the same url and method combination, set 'duplicates' option as true.`
            throw new RegistrationError(msg)
        }

        this.signatures.set(signature, route.name)
        this.routes.set(route.name, route)
    }

    /**
     * Register a new get route
     *
     */
    get(name: string, url: string)
    {
        this.register(name, 'GET', url);
    }

    /**
     * Register a new post route
     *
     */
    post(name: string, url: string)
    {
        this.register(name, 'POST', url);
    }

    /**
     * Register a new put route
     *
     */
    put(name: string, url: string)
    {
        this.register(name, 'PUT', url);
    }

    /**
     * Register a new patch route
     *
     */
    patch(name: string, url: string)
    {
        this.register(name, 'PATCH', url);
    }

    /**
     * Register a new delete route
     *
     */
    delete(name: string, url: string)
    {
        this.register(name, 'DELETE', url);
    }

    /**
     * Get a route with the given name
     *
     */
    route(name: string) : Route | null
    {
        const route = this.routes.get(name)
        return route !== undefined ? route : null
    }

    /**
     * Check if a route with a given name exists
     *
     */
    hasRouteWithName(name: string) : boolean
    {
        return this.routes.has(name)
    }

    /**
     * Check if a route with a given url and optionally method, exists
     *
     */
    hasRouteWithUrl(url: string, ...methods: Array<RequestMethodType>) : boolean
    {
        let hasRoute = false

        if(methods.length === 0) {
            methods = Object.values(RequestMethod)
        }

        methods.forEach(method => {
            if(this.signatures.has(this.routeSignature(method, url))) {
                hasRoute = true
                return false
            }
        })

        return hasRoute
    }

    /**
     * Get a string representation of a given route's destination
     *
     */
    routeSignature(method: RequestMethodType, url: string) : string
    {
        return `${method}:${url}`
    }

    /**
     * Prefix routes registered inside callback with a given prefix
     *
     */
    prefix(prefix: string, callback : (repository: RouteRepository) => void)
    {
        this.routePrefix = prefix;
        callback(this);
        this.routePrefix = null;
    }
}
