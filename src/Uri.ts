import Configuration from './config/UriConfiguration'
import ConfigurationInterface from './contract/UriConfigurationInterface'
import UriParameterBinder from './UriParameterBinder'
import UriComponent from './UriComponent'
import UriSyntaxError from './error/UriSyntaxError'
import UriBuilder from './UriBuilder'
import BaseUriConfigurationInterface from './contract/BaseUriConfigurationInterface'

export default class Uri
{
    private builder: UriBuilder
    readonly binder: UriParameterBinder
    readonly configuration: Configuration

    /**
     * Create a new uri
     *
     *  @throws UriSyntaxError
     *
     */
    constructor(uri: string | Map<UriComponent, string>, config: ConfigurationInterface = {}, baseUri: BaseUriConfigurationInterface | null = null)
    {
        if(uri instanceof Map && (! uri.has(UriComponent.Scheme) && ! uri.has(UriComponent.Host)) && ! uri.has(UriComponent.Path)) {
            const msg = `Uri constructed from components should have at least either scheme and host or path.`
            throw new UriSyntaxError(msg)
        }

        this.configuration = new Configuration(config)
        this.builder = uri instanceof Map ? new UriBuilder(uri, baseUri) : UriBuilder.fromUriString(uri, baseUri)
        this.binder = new UriParameterBinder(this.toString(), this.configuration.parameters)
    }

    /**
     * Get a string representation
     *
     */
    toString() : string
    {
        return this.builder.build()
    }

    /**
     * Check if this uri is absolute
     *
     */
    isAbsolute() : boolean
    {
        return this.builder.has(UriComponent.Scheme) && this.builder.has(UriComponent.Host)
    }

    /**
     * Check if this uri is relative
     *
     */
    isRelative() : boolean
    {
        return ! this.isAbsolute()
    }

    /**
     * Get uri scheme component
     *
     */
    get scheme() : string | null
    {
        return this.getComponent(UriComponent.Scheme)
    }

    /**
     * Get uri userinfo component, containing both username and password
     *
     */
    get userinfo() : string | null
    {
        return this.getComponent(UriComponent.Userinfo)
    }

    /**
     * Get uri user component
     *
     */
    get username() : string | null
    {
        return this.getComponent(UriComponent.Username)
    }

    /**
     * Get uri password component
     *
     */
    get password() : string | null
    {
        return this.getComponent(UriComponent.Password)
    }

    /**
     * Get uri host component
     *
     */
    get host() : string | null
    {
        return this.getComponent(UriComponent.Host)
    }

    /**
     * Get uri port component
     *
     */
    get port() : number | null
    {
        const value = this.getComponent(UriComponent.Port)

        if(value === null) {
            return null
        }

        return parseInt(value)
    }

    /**
     * Get uri path component
     *
     */
    get path() : string | null
    {
        return this.getComponent(UriComponent.Path)
    }

    /**
     * Get query string
     *
     */
    get queryString() : string | null
    {
        return this.getComponent(UriComponent.Query)
    }

    /**
     * Get query parameters
     *
     */
    get queryParameters() : Map<string, string> | null
    {
        const params = new Map<string, string>()
        const query = this.getComponent(UriComponent.Query)

        if(query === null) {
            return null
        }

        query.split('&').forEach(keyValuePair => {
            const [key, value] = keyValuePair.split('=')
            params.set(key, decodeURIComponent(value))
        })

        return params
    }

    /**
     * Get fragment component
     *
     */
    get fragment() : string | null
    {
        return this.getComponent(UriComponent.Fragment)
    }

    /**
     * Get all uri components
     *
     */
    get components() : Map<UriComponent, string>
    {
        return this.builder
    }

    /**
     * Get uri component
     *
     */
    getComponent(component: UriComponent) : string | null
    {
        return this.builder.get(component) ?? null
    }

    /**
     * Check if the uri has the given component
     *
     */
    hasComponent(component: UriComponent) : boolean
    {
        return this.builder.has(component)
    }
}
