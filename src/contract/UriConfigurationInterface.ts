import UriParameterBinderConfigurationInterface from './UriParameterBinderConfigurationInterface'

export default interface UriConfigurationInterface
{
    prependSlash?: boolean
    parameters?: UriParameterBinderConfigurationInterface
    stripLeadingSlashes?: boolean
    stripTrailingSlashes?: boolean
};
