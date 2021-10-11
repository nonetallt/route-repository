import ConfigurationInterface from '../contract/UrlConfigurationInterface'
import Url from '../Url'
import UriParameterConfiguration from '../config/UriParameterConfiguration'

export default class UrlConfiguration implements ConfigurationInterface
{
    readonly prependSlash: boolean
    readonly parameters: UriParameterConfiguration
    readonly stripLeadingSlashes: boolean
    readonly stripTrailingSlashes: boolean

    constructor(config : ConfigurationInterface = {})
    {
        this.prependSlash = false
        this.parameters = new UriParameterConfiguration()
        this.stripLeadingSlashes = false
        this.stripTrailingSlashes = false

        Object.assign(this, config);
    }
}
