import Uri from '../Uri'

export default interface UriBuilderConfigurationInterface
{
    baseUri?: Uri | string | null
    mergeQuery?: boolean
    defaultScheme?: 'http' | 'https' | null
    overrideScheme?: 'http' | 'https' | null
};
