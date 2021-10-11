import Uri from '../Uri'

export default interface BaseUriConfigurationInterface
{
    uri: Uri | string
    mergePath?: boolean
    mergeQuery?: boolean
    defaultScheme?: 'http' | 'https' | null
    overrideScheme?: boolean
};
