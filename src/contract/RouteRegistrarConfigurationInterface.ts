import UriConfigurationInterface from './UriConfigurationInterface'
import RouteMiddlewareInterface from './RouteMiddlewareInterface'

export default interface RouteRegistrarConfigurationInterface
{
    extra?: object
    uris?: UriConfigurationInterface
    registrationMiddleware?: Array<RouteMiddlewareInterface>
}
