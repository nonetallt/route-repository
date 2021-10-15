import Uri from './Uri'
import UriComponent from './UriComponent'
import Route from './Route'
import RequestMethodType from './RequestMethodType'
import Configuration from './config/RouteRegistrarConfiguration'
import ConfigurationInterface from './contract/RouteRegistrarConfigurationInterface'
import merge from 'lodash.merge'
import RegistrationError from './error/RegistrationError'
import RouteInterface from './contract/RouteInterface'
import UriInterface from './contract/UriInterface'

/**
 * Describes a class that can register routes
 *
 */
export default abstract class RouteRegistrar
{
    protected configuration: Configuration

    constructor(config: Configuration)
    {
        this.configuration = new Configuration(config)
    }

    /**
     * Register a new route using a route object. This method has the responsibility of actually storing the route.
     *
     * @throws RegistrationError
     *
     */
    abstract storeRoute(route: Route) : void

    /**
     * Create and register a new route from parameters
     *
     * @throws RegistrationError
     *
     */
    register(name: string, method: RequestMethodType, uri: string | Map<UriComponent, string>, extra: object = {}) : void
    {
        const uriObj = new Uri(uri, this.configuration.uris)
        let route = new Route(name, method, uriObj, merge(this.configuration.extra, extra))

        this.storeRoute(this.applyRegistrationMiddleware(route))
    }

    /**
     * Register all routes from a given schema
     *
     * @throws RegistrationError
     *
     */
    registerAll(routes: Array<RouteInterface> | string) : void
    {
        if(typeof routes === 'string') {
            try {
                routes = Object.assign(new Array<RouteInterface>(), JSON.parse(routes))
            }
            catch(error) {
                if(error instanceof SyntaxError) {
                    const msg = 'Could not load given json. See previous error for more details.'
                    throw new RegistrationError(msg, error)
                }
            }

            if(! Array.isArray(routes)) {
                const msg = 'Could not load given json: array data.'
                throw new RegistrationError(msg)
            }
        }

        for(const route of routes) {

            if(typeof route.uri === 'string') {
                this.register(route.name, route.method, route.uri, route.extra)
                continue
            }

            const uri = new Map<UriComponent, string>()

            for(const [key, value] of Object.entries(UriComponent)) {
                const tmp = route.uri[value as keyof UriInterface]

                if(tmp !== undefined) {
                    uri.set(value, tmp)
                }
            }

            this.register(route.name, route.method, uri, route.extra)
        }
    }

    /**
     * Register a new get route
     *
     * @throws RegistrationError
     *
     */
    get(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'GET', uri, extra);
    }

    /**
     * Register a new post route
     *
     * @throws RegistrationError
     *
     */
    post(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'POST', uri, extra);
    }

    /**
     * Register a new put route
     *
     * @throws RegistrationError
     *
     */
    put(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'PUT', uri, extra);
    }

    /**
     * Register a new patch route
     *
     * @throws RegistrationError
     *
     */
    patch(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'PATCH', uri, extra);
    }

    /**
     * Register a new delete route
     *
     * @throws RegistrationError
     *
     */
    delete(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'DELETE', uri, extra);
    }

    /**
     * Apply registration middleware to a given route
     *
     */
    private applyRegistrationMiddleware(route: Route) : Route
    {
        this.configuration.registrationMiddleware.forEach(middleware => {
            route = middleware.applyMiddleware(route)
        })

        return route
    }
}
