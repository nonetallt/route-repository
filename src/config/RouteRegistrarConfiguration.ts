import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'
import UriBuilderConfigurationInterface from '../contract/UriBuilderConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface
    readonly uriBuilder: UriBuilderConfigurationInterface

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.uris = {}

        // Proxy values from the configuration interface
        this.uriBuilder = {
            baseUri: config.baseUri ?? null,
            mergeQuery: config.mergeQuery
        }

        Object.assign(this, config);
    }
}
