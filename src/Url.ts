import Configuration from './config/UrlConfiguration'
import ConfigurationInterface from './contract/UrlConfigurationInterface'
import UrlParameterBinder from './UrlParameterBinder'
import UrlComponent from './UrlComponent'
import UrlSyntaxError from './error/UrlSyntaxError'
import UrlBuilder from './UrlBuilder'
import BaseUrlConfiguration from './config/BaseUrlConfiguration'

export default class Url
{
    private builder: UrlBuilder
    readonly binder: UrlParameterBinder
    readonly configuration: Configuration

    /**
     * Create a new url
     *
     *  @throws UrlSyntaxError
     *
     */
    constructor(url: string | Map<UrlComponent, string>, config: ConfigurationInterface = {}, baseUri: BaseUrlConfiguration | null = null)
    {
        if(url instanceof Map && (! url.has(UrlComponent.Scheme) && ! url.has(UrlComponent.Host)) && ! url.has(UrlComponent.Path)) {
            const msg = `Url constructed from components should have at least either scheme and host or path.`
            throw new UrlSyntaxError(msg)
        }

        this.configuration = new Configuration(config)
        this.builder = url instanceof Map ? new UrlBuilder(url, baseUri) : UrlBuilder.fromUrlString(url, baseUri)
        this.binder = new UrlParameterBinder(this.toString(), this.configuration.parameters)
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
     * Check if this url is absolute
     *
     */
    isAbsolute() : boolean
    {
        return this.builder.has(UrlComponent.Scheme) && this.builder.has(UrlComponent.Host)
    }

    /**
     * Check if this url is relative
     *
     */
    isRelative() : boolean
    {
        return ! this.isAbsolute()
    }

    /**
     * Get url scheme component
     *
     */
    get scheme() : string | null
    {
        return this.getComponent(UrlComponent.Scheme)
    }

    /**
     * Get url userinfo component, containing both username and password
     *
     */
    get userinfo() : string | null
    {
        return this.getComponent(UrlComponent.Userinfo)
    }

    /**
     * Get url user component
     *
     */
    get username() : string | null
    {
        return this.getComponent(UrlComponent.Username)
    }

    /**
     * Get url password component
     *
     */
    get password() : string | null
    {
        return this.getComponent(UrlComponent.Password)
    }

    /**
     * Get url host component
     *
     */
    get host() : string | null
    {
        return this.getComponent(UrlComponent.Host)
    }

    /**
     * Get url port component
     *
     */
    get port() : number | null
    {
        const value = this.getComponent(UrlComponent.Port)

        if(value === null) {
            return null
        }

        return parseInt(value)
    }

    /**
     * Get url path component
     *
     */
    get path() : string | null
    {
        return this.getComponent(UrlComponent.Path)
    }

    /**
     * Get query string
     *
     */
    get queryString() : string | null
    {
        return this.getComponent(UrlComponent.Query)
    }

    /**
     * Get query parameters
     *
     */
    get queryParameters() : Map<string, string> | null
    {
        const params = new Map<string, string>()
        const query = this.getComponent(UrlComponent.Query)

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
        return this.getComponent(UrlComponent.Fragment)
    }

    /**
     * Get url component
     *
     */
    getComponent(component: UrlComponent) : string | null
    {
        return this.builder.get(component) ?? null
    }

    /**
     * Check if the url has the given component
     *
     */
    hasComponent(component: UrlComponent) : boolean
    {
        return this.builder.has(component)
    }
}
