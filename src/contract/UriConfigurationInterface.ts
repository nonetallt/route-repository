import UriParameterConfigurationInterface from './UriParameterConfigurationInterface'

export default interface UriConfigurationInterface
{
    prependSlash?: boolean
    parameters?: UriParameterConfigurationInterface
    stripLeadingSlashes?: boolean
    stripTrailingSlashes?: boolean
};
