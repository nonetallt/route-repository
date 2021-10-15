import ConfigurationInterface from '../contract/UriParameterBinderConfigurationInterface'

export default class UriParameterBinderConfiguration implements ConfigurationInterface
{
    readonly acceptWhitespace: boolean
    readonly bindGetParameters: boolean
    readonly encodeUriParameters: boolean
    readonly encodeGetParameters: boolean
    readonly typeConversionFunction: (parameterValue: any) => string

    constructor(config : ConfigurationInterface = {})
    {
        this.acceptWhitespace = false
        this.bindGetParameters = false
        this.encodeUriParameters = true
        this.encodeGetParameters = true

        this.typeConversionFunction = (parameterValue: any) => {
            return String(parameterValue)
        }

        Object.assign(this, config);
    }
}
