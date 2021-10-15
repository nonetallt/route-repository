import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'
import RouteRegistrationMiddlewareInterface from '../contract/RouteRegistrationMiddlewareInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface
    readonly registrationMiddleware: Array<RouteRegistrationMiddlewareInterface>

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.uris = {}
        this.registrationMiddleware = new Array<RouteRegistrationMiddlewareInterface>()

        Object.assign(this, config);
    }
}
