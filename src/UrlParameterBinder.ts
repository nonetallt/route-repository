import Url from './Url'
import UrlParameter from './UrlParameter'
import UrlParameterCollection from './UrlParameterCollection'
import UrlParameterBindingError from './error/UrlParameterBindingError'
import TypeConversionError from './error/TypeConversionError'
import UriParameterConfiguration from './config/UriParameterConfiguration'

export default class UrlParameterBinder
{
    private uri: string
    readonly parameters: UrlParameterCollection
    readonly configuration: UriParameterConfiguration

    constructor(uri: string, config: UriParameterConfiguration)
    {
        this.uri = uri
        this.configuration = config
        this.parameters = UrlParameterCollection.parseFromUrl(url.toString())
    }

    /**
     * Bind given values to the url parameter placeholders
     *
     *  @throws UrlParameterBindingError
     *
     */
    bind(values : any, bindGetParameters: boolean = false) : string
    {
        // Return base uri if there's nothing to bind.
        if(this.parameters.length === 0 && bindGetParameters === false) {
            return this.uri
        }

        if(Array.isArray(values)) {
            return this.bindArray(this.uri, (values as Array<string>));
        }

        if(typeof values === 'object' && values !== null) {
            return this.bindObject(this.uri, values, bindGetParameters);
        }

        return this.bindValue(this.uri, values)
    }

    /**
     * Check if a given object has properties matching all required parameters
     *
     */
    canBindObject(object: object) : boolean
    {
        try {
            this.bindObject(this.url, object)
        }
        catch(error) {
            if(error instanceof UrlParameterBindingError) {
                return false
            }
            throw error
        }

        return true
    }


    /**
     * Bind each object property to a to the parameter with a matching name.
     *
     */
    private bindObject(url: string, object : object, bindGetParameters: boolean = false) : string
    {
        this.parameters.forEach(parameter => {

            url = this.bindParameter(url, parameter, (object as any)[parameter.name])

            // Remove already bound values from the object's keys
            delete (object as any)[parameter.name];
        })

        // Bind rest of the parameters as get params if specified
        if(bindGetParameters) {
            url = this.bindGetParameters(url, object);
        }

        return url
    }

    /**
     * Bind values in given order without caring about keys.
     *
     */
    private bindArray(url: string, array: Array<any>) : string
    {
        this.parameters.forEach((parameter, index) => {
            url = this.bindParameter(url, parameter, array[index])
        })

        return url
    }

    /**
     * Bind a given plain value
     *
     */
    private bindValue(url: string, value: any) : string
    {
        const original = value
        const required = this.parameters.getRequired()

        if(required.length > 1) {
            const msg = `Cannot bind a given ${typeof value} as url parameters: this type is handled as a plain value and can only be bound to one parameter but there are ${required.length} required parameters.`
            throw new UrlParameterBindingError(msg)
        }

        return this.bindParameter(url, this.parameters[0], value)
    }

    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    private bindGetParameters(url: string, values : object) : string
    {
        for(const [key, value] of Object.entries(values)) {

            // Append the query indicator for first param
            if(url === '') url += '?';

            // For params after, start with &
            else url += '&';

            // Append the key value pair
            url += `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }

        return url;
    }

    /**
     * Bind a single value to parameter of the given url string
     *
     */
    private bindParameter(url: string, parameter: string | UrlParameter, value: any) : string
    {
        const urlParameter = typeof parameter === 'string' ? this.parameters.getParameter(parameter) : parameter

        if(urlParameter === null) {
            const msg = `Cannot bind value to non-existent parameter '${parameter}'.`
            throw new UrlParameterBindingError(msg)
        }

        if(value === undefined) {
            if(urlParameter.required) {
                const msg = `Cannot bind missing value for required parameter '${urlParameter.name}'.`
                throw new UrlParameterBindingError(msg)
            }
            value = ''
        }

        const original = value

        try {
            value = this.convertToString(value)
        }
        catch(error) {
            if(error instanceof TypeConversionError) {
                const msg = `Cannot bind value for parameter '${urlParameter.name}', unable to convert ${typeof value} to string.`
                throw new UrlParameterBindingError(msg, error)
            }
            throw error
        }

        if(urlParameter.required && value.length === 0) {

            if(typeof original === 'string') {
                const msg = `Cannot bind empty string for required parameter ${urlParameter.name}.`
                throw new UrlParameterBindingError(msg)
            }

            const msg = `Cannot bind given ${typeof original} value for required parameter ${urlParameter.name} because string conversion results in an empty string.`
            throw new UrlParameterBindingError(msg)
        }

        /* TODO use config */

        url = url.replace(urlParameter.placeholder, encodeURIComponent(value))
        url = this.removeTrailingSlashes(url)

        return url
    }

    /**
     * Removes trailing slashes from a given string
     *
     */
    private removeTrailingSlashes(url: string) : string
    {
        let lastChar = url.slice(-1)

        while(lastChar === '/') {
            url = url.slice(0, -1)
            lastChar = url.slice(-1)
        }

        return url
    }

    /**
     * Convert a given value to string according to the configured parameter type conversion function
     *
     */
    private convertToString(value: any) : string
    {
        if(typeof value !== 'string') {
            value = this.configuration.typeConversionFunction(value)

            if(value === null) {
                const msg = 'String conversion failed'
                throw new UrlParameterBindingError(msg)
            }
        }

        return value.trim()
    }
}
