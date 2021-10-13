import Uri from '../Uri'

export default interface UriBuilderConfigurationInterface
{
    baseUri?: Uri | string | null
    mergeQuery?: boolean
};
