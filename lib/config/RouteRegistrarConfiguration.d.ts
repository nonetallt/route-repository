import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface';
import UriConfigurationInterface from '../contract/UriConfigurationInterface';
import RouteMiddlewareInterface from '../contract/RouteMiddlewareInterface';
export default class RouteRegistrarConfiguration implements ConfigurationInterface {
    readonly extra: object;
    readonly uris: UriConfigurationInterface;
    readonly registrationMiddleware: Array<RouteMiddlewareInterface>;
    constructor(config?: ConfigurationInterface);
}
