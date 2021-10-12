import ConfigurationInterface from '../contract/UriConfigurationInterface'
import Uri from '../Uri'
import ParameterInterface from '../contract/UriParameterBinderConfigurationInterface'

export default class UriConfiguration implements ConfigurationInterface
{
    readonly prependSlash: boolean
    readonly parameters: ParameterInterface
    readonly stripLeadingSlashes: boolean
    readonly stripTrailingSlashes: boolean

    constructor(config : ConfigurationInterface = {})
    {
        this.prependSlash = false
        this.parameters = {}
        this.stripLeadingSlashes = false
        this.stripTrailingSlashes = false

        Object.assign(this, config);
    }
}
