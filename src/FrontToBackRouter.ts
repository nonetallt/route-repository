import Route from './Route'
import RouterConfiguration from './RouterConfiguration'
import RegistrationError from './Error/RegistrationError'
import HttpRequestMethod from './HttpRequestMethod'

export default class FrontToBackRouter
{
    routes: object
    configuration: object

    constructor(configuration = {})
    {
        this.routes = {}
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
        syntax error
        if(this.routes[route.name] !== undefined && this.configuration.registration.immutable) {
            const msg = `Route '${route.name}' is already defined and is immutable!`
            throw new RegistrationError(msg)
        }

        this.routes[route.name] = route
    }
}
