export default interface UriParameterConfigurationInterface
{
    acceptWhitespace?: boolean
    encodeUriParameters?: boolean
    encodeGetParameters?: boolean
    typeConversionFunction?: (parameterValue: any) => string | null
};
