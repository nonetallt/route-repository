import Route from './Route'
import RouteRegistrar from './RouteRegistrar'
import RouteGroupRegistrar from './RouteGroupRegistrar'
import RouteRegistrarConfigurationInterface from './contract/RouteRegistrarConfigurationInterface'
import Configuration from './config/RouteRepositoryConfiguration'
import ConfigurationInterface from './contract/RouteRepositoryConfigurationInterface'
import RegistrationError from './error/RegistrationError'
import RequestMethod from './RequestMethod'
import RequestMethodType from './RequestMethodType'

export default class RouteRepository extends RouteRegistrar
{
    private routes: Map<string, Route>
    private signatures: Map<string, string>
    private configuration: Configuration

    constructor(config : ConfigurationInterface = {})
    {
        const configuration = new Configuration(config)
        super(configuration.registration)
        this.routes = new Map()
        this.signatures = new Map()
        this.configuration = configuration
    }

    /**
     * Register a new route using a route object
     *
     */
    protected registerRoute(route: Route) : void
    {
        const oldRoute = this.routes.get(route.name);

        // Check if a route with this name is already registered and thus being modified
        if(oldRoute !== undefined) {

            if(this.configuration.mutable === false) {
                const msg = `Route '${route.name}' is already defined and immutable!`
                throw new RegistrationError(msg)
            }

            // If existing route is being modified, remove the old signature
            this.signatures.delete(this.routeSignature(oldRoute.method, oldRoute.url.toString()));
        }

        const signature = this.routeSignature(route.method, route.url.toString());
        const duplicateRoute = this.signatures.get(signature);

        if(this.configuration.duplicates === false && duplicateRoute !== undefined) {

            const msg = `Route '${route.name}' is a duplicate of existing route '${duplicateRoute}'.`
            const hint =  "If you want to enable multiple aliases for the same url and method combination, set 'duplicates' option as true."
            throw new RegistrationError(msg + "\n" + hint)
        }

        this.signatures.set(signature, route.name)
        this.routes.set(route.name, route)
    }

    /**
     * Count the number of routes
     *
     */
    countRoutes() : number
    {
        return this.routes.size
    }

    /**
     * Get a route with the given name
     *
     */
    getRoute(name: string) : Route | null
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
    private routeSignature(method: RequestMethodType, url: string) : string
    {
        return `${method}:${url}`
    }

    /**
     * Register routes using same registrar settings for the whole group
     *
     */
    group(config: RouteRegistrarConfigurationInterface, callback : (registrar: RouteRegistrar) => void) : void
    {
        const registrar = new RouteGroupRegistrar(this, config)
        callback(registrar)
    }

    /**
     * Get a formatted list of all registered routes.
     *
     */
    listRoutes() : string
    {
        const rows = [['NAME', 'METHOD', 'URL']]

        this.routes.forEach(route => {
            rows.push([route.name, route.method, route.url.toString()])
        })

        const nameLen   = Math.max(...rows.map(row => row[0].length))
        const methodLen = Math.max(...rows.map(row => row[1].length))
        const urlLen    = Math.max(...rows.map(row => row[2].length))

        rows.splice(1, 0, [
            '-'.padEnd(nameLen, '-'),
            '-'.padEnd(methodLen, '-'),
            '-'.padEnd(urlLen, '-'),
        ])

        const table = rows.map(row => {

            row[0] = row[0].padEnd(nameLen)
            row[1] = row[1].padEnd(methodLen)
            row[2] = row[2].padEnd(urlLen)

            return '| ' + row.join(' | ') + ' |'

        }).join("\n")

        return table
    }
}
