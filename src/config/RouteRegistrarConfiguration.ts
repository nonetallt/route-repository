import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.uris = {}

        Object.assign(this, config);
    }
}
