import ConfigurationInterface from '../contract/BaseUriConfigurationInterface'
import Uri from '../Uri'

export default class BaseUriConfiguration implements ConfigurationInterface
{
    private _uri: Uri | null
    readonly mergePath: boolean
    readonly mergeQuery: boolean
    readonly defaultScheme: 'http' | 'https' | null
    readonly overrideScheme: boolean

    constructor(config : ConfigurationInterface = {})
    {
        this._uri = null
        this.mergePath = true
        this.mergeQuery = false
        this.defaultScheme = null
        this.overrideScheme = false

        Object.assign(this, config);
    }

    public get uri() : Uri | null
    {
        return this._uri
    }

    private set uri(uri: Uri | string | null)
    {
        if(typeof uri === 'string') {
            uri = new Uri(uri)
        }

        this._uri = uri
    }
}
