import ConfigurationInterface from '../contract/UriConfigurationInterface'
import ParameterInterface from '../contract/UriParameterBinderConfigurationInterface'
import UriBuilderConfigurationInterface from '../contract/UriBuilderConfigurationInterface'

export default class UriConfiguration implements ConfigurationInterface
{
    readonly prependSlash: boolean
    readonly parameters: ParameterInterface

    constructor(config : ConfigurationInterface = {})
    {
        this.prependSlash = true
        this.parameters = {}

        Object.assign(this, config);
    }
}
