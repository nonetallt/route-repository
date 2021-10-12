export default interface UriParameterBinderConfigurationInterface
{
    acceptWhitespace?: boolean
    bindGetParameters?: boolean
    encodeUriParameters?: boolean
    encodeGetParameters?: boolean
    typeConversionFunction?: (parameterValue: any) => string | null
};
