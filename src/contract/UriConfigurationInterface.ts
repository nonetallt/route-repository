import UriParameterBinderConfigurationInterface from './UriParameterBinderConfigurationInterface'

export default interface UriConfigurationInterface
{
    prependSlash?: boolean
    defaultScheme?: 'http' | 'https' | null
    overrideScheme?: 'http' | 'https' | null
    parameters?: UriParameterBinderConfigurationInterface
};
