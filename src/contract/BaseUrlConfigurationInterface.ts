import Url from '../Url'

export default interface BaseUrlConfigurationInterface
{
    url: Url | null
    mergePath?: boolean
    mergeQuery?: boolean
    defaultScheme?: 'http' | 'https' | null
    overrideScheme?: boolean
};
