import ConfigurationInterface from '../contract/BaseUrlConfigurationInterface'
import Url from '../Url'

export default class BaseUrlConfiguration implements ConfigurationInterface
{
    private _uri: Url | null
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

    public get uri() : Url | null
    {
        return this._uri
    }

    private set uri(uri: Url | string | null)
    {
        if(typeof uri === 'string') {
            uri = new Url(uri)
        }

        this._uri = uri
    }
}
