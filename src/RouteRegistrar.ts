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
    register(name: string, method: RequestMethodType, url: string, extra: object = {}) : void
    {
        let route = new Route(name, method, url, extra)
        route = this.applyRegistrationMiddleware(route)
        return this.registerRoute(route)
    }

    /**
     * Register a new get route
     *
     */
    get(name: string, url: string, extra: object = {}) : void
    {
        this.register(name, 'GET', url, extra);
    }

    /**
     * Register a new post route
     *
     */
    post(name: string, url: string, extra: object = {}) : void
    {
        this.register(name, 'POST', url, extra);
    }

    /**
     * Register a new put route
     *
     */
    put(name: string, url: string, extra: object = {}) : void
    {
        this.register(name, 'PUT', url, extra);
    }

    /**
     * Register a new patch route
     *
     */
    patch(name: string, url: string, extra: object = {}) : void
    {
        this.register(name, 'PATCH', url, extra);
    }

    /**
     * Register a new delete route
     *
     */
    delete(name: string, url: string, extra: object = {}) : void
    {
        this.register(name, 'DELETE', url, extra);
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
