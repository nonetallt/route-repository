export default interface UrlParameterConfigurationInterface
{
    acceptWhitespace?: boolean
    encodeUrlParameters?: boolean
    encodeGetParameters?: boolean
    typeConversionFunction?: (parameterValue: any) => string | null
};
