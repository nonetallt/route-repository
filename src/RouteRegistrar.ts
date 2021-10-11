import Route from './Route'
import RequestMethodType from './RequestMethodType'
import RouteRegistrationMiddlewareInterface from './contract/RouteRegistrationMiddlewareInterface'
import Configuration from './config/RouteRegistrarConfiguration'
import ApplyConfiguration from './middleware/registration/ApplyConfiguration'

/**
 * Describes a class that can register routes
 *
 */
export default abstract class RouteRegistrar
{
    readonly registrationMiddleware: Array<RouteRegistrationMiddlewareInterface>

    constructor(config: Configuration)
    {
        this.registrationMiddleware = new Array<RouteRegistrationMiddlewareInterface>()
        this.registrationMiddleware.push(new ApplyConfiguration(config))
    }

    /**
     * Register a new route using a route object
     *
     */
    protected abstract registerRoute(route: Route) : void

    /**
     * Create and register a new route from parameters
     *
     */
    register(name: string, method: RequestMethodType, uri: string, extra: object = {}) : void
    {
        let route = new Route(name, method, uri, extra)
        route = this.applyRegistrationMiddleware(route)
        return this.registerRoute(route)
    }

    /**
     * Register a new get route
     *
     */
    get(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'GET', uri, extra);
    }

    /**
     * Register a new post route
     *
     */
    post(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'POST', uri, extra);
    }

    /**
     * Register a new put route
     *
     */
    put(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'PUT', uri, extra);
    }

    /**
     * Register a new patch route
     *
     */
    patch(name: string, uri: string, extra: object = {}) : void
    {
        this.register(name, 'PATCH', uri, extra);
    }

    /**
     * Register a new delete route
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
