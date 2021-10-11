import ConfigurationInterface from '../contract/UriParameterConfigurationInterface'

export default class UriParameterConfiguration implements ConfigurationInterface
{
    readonly acceptWhitespace: boolean
    readonly encodeUrlParameters: boolean
    readonly encodeGetParameters: boolean
    readonly typeConversionFunction: (parameterValue: any) => string | null

    constructor(config : ConfigurationInterface = {})
    {
        this.acceptWhitespace = false
        this.encodeUrlParameters = true
        this.encodeGetParameters = true

        this.typeConversionFunction = (parameterValue: any) => {
            return String(parameterValue)
        }

        Object.assign(this, config);
    }
}
