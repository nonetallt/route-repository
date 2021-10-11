import UriParameterConfigurationInterface from './UriParameterConfigurationInterface'

export default interface UrlConfigurationInterface
{
    prependSlash?: boolean
    parameters?: UrlParameterConfigurationInterface
    stripLeadingSlashes?: boolean
    stripTrailingSlashes?: boolean
};
