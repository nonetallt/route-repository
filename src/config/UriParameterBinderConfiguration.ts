import ConfigurationInterface from '../contract/UriParameterBinderConfigurationInterface'

export default class UriParameterBinderConfiguration implements ConfigurationInterface
{
    readonly trailingSlashes: boolean
    readonly bindGetParameters: boolean
    readonly encodeUriParameters: boolean
    readonly encodeGetParameters: boolean
    readonly typeConversionFunction: (parameterValue: any) => string

    constructor(config : ConfigurationInterface = {})
    {
        this.trailingSlashes = false
        this.bindGetParameters = false
        this.encodeUriParameters = true
        this.encodeGetParameters = true

        this.typeConversionFunction = (parameterValue: any) => {
            return String(parameterValue)
        }

        Object.assign(this, config);
    }
}
