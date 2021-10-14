import ConfigurationInterface from '../contract/UriBuilderConfigurationInterface'
import Uri from '../Uri'
import UriSyntaxError from '../error/UriSyntaxError'
import ConfigurationError from '../error/ConfigurationError'

export default class UriBuilderConfiguration implements ConfigurationInterface
{
    private _baseUri: Uri | null
    readonly mergeQuery: boolean
    readonly defaultScheme: 'http' | 'https' | null
    readonly overrideScheme: 'http' | 'https' | null

    constructor(config : ConfigurationInterface)
    {
        this._baseUri = null
        this.mergeQuery = false
        this.defaultScheme = null
        this.overrideScheme = null

        Object.assign(this, config);
    }

    public get baseUri() : Uri | null
    {
        return this._baseUri
    }

    private set baseUri(uri: Uri | string | null)
    {
        if(typeof uri !== 'string') {
            this._baseUri = uri
            return
        }

        try {
            this._baseUri = new Uri(uri)
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
