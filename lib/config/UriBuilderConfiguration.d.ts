import ConfigurationInterface from '../contract/UriBuilderConfigurationInterface';
import Uri from '../Uri';
export default class UriBuilderConfiguration implements ConfigurationInterface {
    private _baseUri;
    readonly mergeQuery: boolean;
    readonly defaultScheme: 'http' | 'https' | null;
    readonly overrideScheme: 'http' | 'https' | null;
    constructor(config: ConfigurationInterface);
    get baseUri(): Uri | null;
    private set baseUri(value);
}
