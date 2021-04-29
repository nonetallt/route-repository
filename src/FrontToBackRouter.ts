import Route from './Route'
import RouterConfiguration from './RouterConfiguration'
import RegistrationError from './Error/RegistrationError'
import HttpRequestMethod from './HttpRequestMethod'

export default class FrontToBackRouter
{
    routes: Map<string, Route>
    configuration: RouterConfiguration

    constructor(configuration = {})
    {
        this.routes = new Map()
        this.configuration = new RouterConfiguration(configuration)
    }

    /**
     * Create and register a new route from parameters
     *
     */
    register(name: string, method: HttpRequestMethod, url: string)
    {
        return this.registerRoute(new Route(name, method, url))
    }

    /**
     * Register a new route using a route object
     *
     */
    registerRoute(route: Route)
    {
        if(this.routes.get(route.name) !== undefined && this.configuration.registration.immutable) {
            const msg = `Route '${route.name}' is already defined and immutable!`
            throw new RegistrationError(msg)
        }

        this.routes.set(route.name, route)
    }
}
