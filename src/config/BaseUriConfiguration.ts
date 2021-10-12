import ConfigurationInterface from '../contract/BaseUriConfigurationInterface'
import Uri from '../Uri'
import UriSyntaxError from '../error/UriSyntaxError'
import ConfigurationError from '../error/ConfigurationError'

export default class BaseUriConfiguration implements ConfigurationInterface
{
    private _uri!: Uri
    readonly mergePath: boolean
    readonly mergeQuery: boolean
    readonly defaultScheme: 'http' | 'https' | null
    readonly overrideScheme: boolean

    constructor(config : ConfigurationInterface)
    {
        this.mergePath = true
        this.mergeQuery = false
        this.defaultScheme = null
        this.overrideScheme = false

        Object.assign(this, config);
    }

    public get uri() : Uri
    {
        return this._uri
    }

    private set uri(uri: Uri | string)
    {
        if(uri instanceof Uri) {
            this._uri = uri
            return
        }

        try {
            this._uri = new Uri(uri)
        }
        catch(error) {
            if(error instanceof UriSyntaxError) {
                const msg = `Invalid base uri given. See previous error for more details.`
                throw new ConfigurationError(msg, error)
            }
            throw error
        }
    }
}
