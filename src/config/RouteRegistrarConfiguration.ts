import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UriConfiguration from './UriConfiguration'
import UriConfigurationInterface from '../contract/UriConfigurationInterface'
import BaseUriConfiguration from './BaseUriConfiguration'
import BaseUriConfigurationInterface from '../contract/BaseUriConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly uris: UriConfigurationInterface
    readonly baseUri: BaseUriConfigurationInterface

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.uris = new UriConfiguration()
        this.baseUri = new BaseUriConfiguration()

        Object.assign(this, config);
    }
}
