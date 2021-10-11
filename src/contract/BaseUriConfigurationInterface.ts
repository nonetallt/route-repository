import Uri from '../Uri'

export default interface BaseUriConfigurationInterface
{
    uri: Uri | null
    mergePath?: boolean
    mergeQuery?: boolean
    defaultScheme?: 'http' | 'https' | null
    overrideScheme?: boolean
};
