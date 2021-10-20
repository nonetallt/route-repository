import Configuration from './config/UriConfiguration'
import ConfigurationInterface from './contract/UriConfigurationInterface'
import UriParameterBinder from './UriParameterBinder'
import UriComponent from './UriComponent'
import UriSyntaxError from './error/UriSyntaxError'
import UriBuilder from './UriBuilder'
import UriParameterBinderConfigurationInterface from './contract/UriParameterBinderConfigurationInterface'
import QueryParameterCollection from './QueryParameterCollection'
import cloneDeep from 'lodash.clonedeep'
import UriParameterCollection from './UriParameterCollection'

export default class Uri
{
    private builder: UriBuilder
    private binder: UriParameterBinder
    private configuration: Configuration

    /**
     * Create a new uri
     *
     *  @throws UriSyntaxError
     *
     */
    constructor(uri: string | Map<UriComponent, string>, config: ConfigurationInterface = {})
    {
        if(uri instanceof Map && ! uri.has(UriComponent.Host) && ! uri.has(UriComponent.Path)) {
            const msg = `Uri constructed from components should have at least either host or path.`
            throw new UriSyntaxError(msg)
        }

        this.configuration = new Configuration(config)

        if(
           this.configuration.prependSlash &&
           typeof uri === 'string' &&
           uri.substr(0, 'http://'.length) !== 'http://' &&
           uri.substr(0, 'https://'.length) !== 'https://' &&
           uri.charAt(0) !== '/'
        ) {
               uri = '/' + uri
        }

        this.builder = uri instanceof Map ? new UriBuilder(uri, config) : UriBuilder.fromUriString(uri, config)
        this.binder = new UriParameterBinder(this.configuration.parameters)
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
        return this.builder.has(UriComponent.Host)
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
    get queryParameters() : QueryParameterCollection | null
    {
        if(this.queryString === null) {
            return null
        }

        return QueryParameterCollection.fromQueryString(this.queryString)
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
     * Get the uri parameters
     *
     */
    get uriParameters() : UriParameterCollection
    {
        return UriParameterCollection.fromUriString(this.toString())
    }

    /**
     * Bind given values as uri parameters
     *
     * @throws UriParameterBindingError
     *
     */
    bindParameters(values : any, config: UriParameterBinderConfigurationInterface | null = null) : string
    {
        if(config !== null) {
            return this.binder.bind(this.toString(), values, config)
        }

        return this.binder.bind(this.toString(), values)
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

    /**
     * Create a new instance of this uri with the given component uri component
     *
     */
    withComponent(component: UriComponent, value: string) : Uri
    {
        const instance = cloneDeep(this)
        instance.setComponent(component, value)
        return instance
    }

    /**
     *  Set the value of a given component
     *
     */
    protected setComponent(component: UriComponent, value: string)
    {
        this.builder.set(component, value)
    }
}
