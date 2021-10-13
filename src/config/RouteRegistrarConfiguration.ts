import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'
import UriBuilderConfigurationInterface from '../contract/UriBuilderConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface

    /**
     * The reason this defaults to null instead of {} like other interfaces is because it has required properties.
     *
     */
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
