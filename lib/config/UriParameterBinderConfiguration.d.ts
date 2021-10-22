import ConfigurationInterface from '../contract/UriParameterBinderConfigurationInterface';
export default class UriParameterBinderConfiguration implements ConfigurationInterface {
    readonly trailingSlashes: boolean;
    readonly bindGetParameters: boolean;
    readonly encodeUriParameters: boolean;
    readonly encodeGetParameters: boolean;
    readonly typeConversionFunction: (parameterValue: any) => string;
    constructor(config?: ConfigurationInterface);
}
