import Uri from './Uri'
import Route from './Route'
import RequestMethodType from './RequestMethodType'
import RouteRegistrationMiddlewareInterface from './contract/RouteRegistrationMiddlewareInterface'
import Configuration from './config/RouteRegistrarConfiguration'
import ConfigurationInterface from './contract/RouteRegistrarConfigurationInterface'
import merge from 'lodash.merge'

/**
 * Describes a class that can register routes
 *
 */
export default abstract class RouteRegistrar
{
    protected configuration: Configuration
    readonly registrationMiddleware: Array<RouteRegistrationMiddlewareInterface>

    constructor(config: Configuration)
    {
        this.configuration = new Configuration(config)
        this.registrationMiddleware = new Array<RouteRegistrationMiddlewareInterface>()
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
    register(name: string, method: RequestMethodType, uri: string, extra: object = {}) : void
    {
        const uriObj = new Uri(uri, this.configuration.uris, this.configuration.baseUri)
        let route = new Route(name, method, uriObj, merge(this.configuration.extra, extra))

        this.storeRoute(this.applyRegistrationMiddleware(route))
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
        this.registrationMiddleware.forEach(middleware => {
            route = middleware.apply(route)
        })

        return route
    }
}
