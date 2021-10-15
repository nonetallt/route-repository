import Uri from './Uri'
import UriParameter from './UriParameter'
import UriParameterCollection from './UriParameterCollection'
import UriParameterBindingError from './error/UriParameterBindingError'
import TypeConversionError from './error/TypeConversionError'
import Configuration from './config/UriParameterBinderConfiguration'
import ConfigurationInterface from './contract/UriParameterBinderConfigurationInterface'
import QueryParameterCollection from './QueryParameterCollection'
import UriComponent from './UriComponent'

/**
 * Not part of the external API, use Uri as a wrapper
 *
 */
export default class UriParameterBinder
{
    private configuration: Configuration

    constructor(config: ConfigurationInterface = {})
    {
        this.configuration = new Configuration(config)
    }

    /**
     * Bind given values to the uri parameter placeholders
     *
     *  @throws UriParameterBindingError
     *
     */
    bind(uri: string, values: any, config: ConfigurationInterface | null = null) : string
    {
        const configuration = config !== null ? new Configuration(config) : this.configuration
        const parameters = UriParameterCollection.fromUriString(uri.toString())

        // Return base uri if there's nothing to bind.
        if(parameters.length === 0 && configuration.bindGetParameters === false) {
            return uri
        }

        if(Array.isArray(values)) {
            return this.bindArray(uri, (values as Array<string>), parameters, configuration);
        }

        if(typeof values === 'object' && values !== null) {
            return this.bindObject(uri, values, parameters, configuration);
        }

        return this.bindValue(uri, values, parameters, configuration)
    }

    /**
     * Bind each object property to a to the parameter with a matching name.
     *
     */
    private bindObject(uri: string, object : object, parameters: UriParameterCollection, config: Configuration) : string
    {
        parameters.forEach(parameter => {

            uri = this.bindParameter(uri, parameter, (object as any)[parameter.name], config)

            // Remove already bound values from the object's keys
            delete (object as any)[parameter.name];
        })

        // Bind rest of the parameters as get params if specified
        if(Object.keys(object).length > 0 && config.bindGetParameters) {
            uri = this.bindGetParameters(uri, object, config);
        }

        return uri
    }

    /**
     * Bind values in given order without caring about keys.
     *
     */
    private bindArray(uri: string, array: Array<any>, parameters: UriParameterCollection, config: Configuration) : string
    {
        parameters.forEach((parameter, index) => {
            uri = this.bindParameter(uri, parameter, array[index], config)
        })

        return uri
    }

    /**
     * Bind a given plain value
     *
     */
    private bindValue(uri: string, value: any, parameters: UriParameterCollection, config: Configuration) : string
    {
        const original = value
        const required = parameters.getRequired()

        if(required.length > 1) {
            const msg = `Cannot bind a given ${typeof value} as uri parameters: this type is handled as a plain value and can only be bound to one parameter but there are ${required.length} required parameters.`
            throw new UriParameterBindingError(msg)
        }

        return this.bindParameter(uri, parameters[0], value, config)
    }

    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    private bindGetParameters(uri: string, values : object, config: Configuration) : string
    {
        const uriObj = new Uri(uri)
        const oldQuery = uriObj.queryParameters ? uriObj.queryParameters : new QueryParameterCollection
        const newQuery = new QueryParameterCollection()

        for(const [key, value] of Object.entries(values)) {
            newQuery.set(key, this.stringValue(key, value))
        }

        return uriObj.withComponent(UriComponent.Query, oldQuery.merge(newQuery).stringify(config.encodeGetParameters)).toString()
    }

    /**
     * Bind a single value to parameter of the given uri string
     *
     */
    private bindParameter(uri: string, parameter: UriParameter, value: any, config: Configuration) : string
    {
        if(value === undefined) {
            if(parameter.required) {
                const msg = `Cannot bind missing value for required parameter '${parameter.name}'.`
                throw new UriParameterBindingError(msg)
            }
            value = ''
        }

        const original = value
        value = this.stringValue(parameter.name, value)

        if(parameter.required && value.length === 0) {

            if(typeof original === 'string') {
                const msg = `Cannot bind empty string for required parameter ${parameter.name}.`
                throw new UriParameterBindingError(msg)
            }

            const msg = `Cannot bind given ${typeof original} value for required parameter ${parameter.name} because string conversion results in an empty string.`
            throw new UriParameterBindingError(msg)
        }

        uri = uri.replace(parameter.placeholder, config.encodeUriParameters ? encodeURIComponent(value) : value)
        uri = config.trailingSlashes ? uri : this.removeTrailingSlashes(uri)

        return uri
    }

    /**
     * Removes trailing slashes from a given string
     *
     */
    private removeTrailingSlashes(uri: string) : string
    {
        let lastChar = uri.slice(-1)

        while(lastChar === '/') {
            uri = uri.slice(0, -1)
            lastChar = uri.slice(-1)
        }

        return uri
    }

    /**
     * Convert a given value to string according to the configured parameter type conversion function
     *
     */
    private stringValue(name: string, value: any) : string
    {
        try {
            if(typeof value !== 'string') {
                value = this.configuration.typeConversionFunction(value)
            }
        }
        catch(error) {
            if(error instanceof TypeConversionError) {
                const msg = `Cannot bind value for parameter '${name}', unable to convert ${typeof value} to string.`
                throw new UriParameterBindingError(msg, error)
            }
            throw error
        }

        return value
    }
}
