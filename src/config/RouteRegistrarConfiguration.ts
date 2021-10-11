import ConfigurationInterface from '../contract/RouteRegistrarConfigurationInterface'
import UrlConfiguration from './UrlConfiguration'
import UrlConfigurationInterface from '../contract/UrlConfigurationInterface'
import BaseUrlConfiguration from './BaseUrlConfiguration'
import BaseUrlConfigurationInterface from '../contract/BaseUrlConfigurationInterface'

export default class RouteRegistrarConfiguration implements ConfigurationInterface
{
    readonly extra: object
    readonly urls: UrlConfigurationInterface
    readonly baseUri: BaseUrlConfigurationInterface

    constructor(config: ConfigurationInterface = {})
    {
        this.extra = {}
        this.urls = new UrlConfiguration()
        this.baseUri = new BaseUrlConfiguration()

        Object.assign(this, config);
    }
}
