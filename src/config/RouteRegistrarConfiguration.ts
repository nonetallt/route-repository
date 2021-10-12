import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'
import BaseUriConfigurationInterface from '../contract/BaseUriConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface

    /**
     * The reason this defaults to null instead of {} like other interfaces is because it has required properties.
     *
     */
    readonly baseUri: BaseUriConfigurationInterface | null

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.uris = {}
        this.baseUri = null

        Object.assign(this, config);
    }
}
