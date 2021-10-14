import ConfigurationInterface from '../contract/UriConfigurationInterface'
import ParameterInterface from '../contract/UriParameterBinderConfigurationInterface'

export default class UriConfiguration implements ConfigurationInterface
{
    readonly prependSlash: boolean
    readonly defaultScheme: 'http' | 'https' | null
    readonly overrideScheme: 'http' | 'https' | null
    readonly parameters: ParameterInterface

    constructor(config : ConfigurationInterface = {})
    {
        this.prependSlash = true
        this.defaultScheme = null
        this.overrideScheme = null
        this.parameters = {}

        Object.assign(this, config);
    }
}
