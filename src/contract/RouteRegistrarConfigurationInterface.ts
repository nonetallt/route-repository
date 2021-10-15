import UriConfigurationInterface from './UriConfigurationInterface'
import RouteRegistrationMiddlewareInterface from './RouteRegistrationMiddlewareInterface'

export default interface RouteRegistrarConfigurationInterface
{
    extra?: object
    uris?: UriConfigurationInterface
    registrationMiddleware?: Array<RouteRegistrationMiddlewareInterface>
}
