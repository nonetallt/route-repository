export default interface UriParameterBinderConfigurationInterface {
    trailingSlashes?: boolean;
    bindGetParameters?: boolean;
    encodeUriParameters?: boolean;
    encodeGetParameters?: boolean;
    typeConversionFunction?: (parameterValue: any) => string;
}
