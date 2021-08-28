import UrlParameterCollection from './UrlParameterCollection'
import ParameterBindingError from './error/ParameterBindingError'
import Configuration from './config/UrlConfiguration'
import ConfigurationInterface from './contract/UrlConfigurationInterface'
import TypeConversionError from './error/TypeConversionError'

export default class Url
{
    private content : string
    readonly parameters: UrlParameterCollection
    readonly configuration: Configuration

    constructor(content: string, config: ConfigurationInterface = {})
    {
        this.content = content
        this.parameters = UrlParameterCollection.parseFromUrl(content)
        this.configuration = new Configuration(config)
    }

    toString() : string
    {
        return this.content
    }

    /**
     * Bind given values to the url parameter placeholders
     *
     */
    bindParameters(values : any, bindGetParameters: boolean = false) : string
    {
        // Return base url if there's nothing to bind.
        if(this.parameters.length === 0 && bindGetParameters === false) {
            return this.content
        }

        if(Array.isArray(values)) {
            return this.bindArray((values as Array<string>));
        }

        if(typeof values === 'object' && values !== null) {
            return this.bindObject(values, bindGetParameters);
        }

        return this.bindPlainValue(values)
    }

    /**
     * Check if a given object has properties matching all required parameters
     *
     * @throws ParameterBindingError
     *
     */
    canBindObject(object: object) : boolean
    {
        let canBind = true

        this.parameters.forEach(parameter => {

            if(object.hasOwnProperty(parameter.name)) {
                let valueToBind = (object as any)[parameter.name]

                try {
                    valueToBind = this.convertToString(valueToBind)
                }
                catch(error) {
                    if(error instanceof TypeConversionError) {
                        canBind = false
                        return false
                    }
                    throw error
                }

                // Check if bound property can be converted into a non-empty string
                if(valueToBind === '') {
                    canBind = false
                    return false
                }
            }
            else if(parameter.required) {
                canBind = false
                return false
            }
        })

        return canBind
    }

    /**
     * Check if this url is absolute
     *
     */
    isAbsolute() : boolean
    {
        /* TODO */
        return false
    }

    /**
     * Check if this url is relative (aka URI instead of an actual URL...)
     *
     */
    isRelative() : boolean
    {
        return ! this.isAbsolute()
    }

    /**
     * Bind each value to a specified parameter key.
     *
     */
    private bindObject(object : object, bindGetParameters: boolean = false) : string
    {
        let url = this.content

        this.parameters.forEach(parameter => {

            let valueToBind = (object as any)[parameter.name]

            try {
                valueToBind = valueToBind === undefined ? '' : this.convertToString(valueToBind)
            }
            catch(error) {
                if(error instanceof TypeConversionError) {
                    const msg = `Cannot bind value for parameter '${parameter.name}', unable to convert ${typeof valueToBind} to string.`
                    throw new ParameterBindingError(msg, error)
                }
                throw error
            }

            if(parameter.required && valueToBind === '') {
                this.throwBindingError(parameter.name)
            }

            url = this.parameters.bindParameter(url, parameter, valueToBind)

            // Remove already bound values from the object's keys
            delete (object as any)[parameter.name];
        })

        // Bind rest of the parameters as get params if specified
        if(bindGetParameters) {
            url = this.bindGetParameters(object);
        }

        return this.removeTrailingSlashes(url);
    }

    /**
     * Bind a given plain value
     *
     */
    private bindPlainValue(value: any) : string
    {
        const original = value
        const required = this.parameters.getRequired()

        if(required.length > 1) {
            const msg = `Cannot bind a given ${typeof value} as url parameters: this type is handled as a plain value and can only be bound to one parameter but there are ${required.length} required parameters (${this.content}).`
            throw new ParameterBindingError(msg)
        }

        const parameter = this.parameters[0]

        try {
            value = this.convertToString(value)
        }
        catch(error) {
            if(error instanceof TypeConversionError) {
                const msg = `Cannot bind value for parameter '${parameter.name}', unable to convert ${typeof value} to string.`
                throw new ParameterBindingError(msg, error)
            }
            throw error
        }

        if(value === '') {
            const msg = `Cannot bind given value of type ${typeof original} because string conversion results in an empty string`
            throw new ParameterBindingError(msg)
        }

        return this.parameters.bindParameter(this.content, parameter, value)
    }


    /**
     * Bind values in given order without caring about keys.
     *
     */
    private bindArray(array: Array<any>) : string
    {
        let url = this.content;

        this.parameters.forEach((parameter, index) => {

            let valueToBind = array[index] ?? '';

            if(parameter.required && valueToBind === '') {
                this.throwBindingError(parameter.name);
            }

            try {
                valueToBind = this.convertToString(valueToBind)
            }
            catch(error) {
                if(error instanceof TypeConversionError) {
                    const msg = `Cannot bind value for parameter '${parameter.name}', unable to convert ${typeof valueToBind} to string.`
                    throw new ParameterBindingError(msg, error)
                }
                throw error
            }

            url = this.parameters.bindParameter(url, parameter, valueToBind)
        })

        return this.removeTrailingSlashes(url);
    }

    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    private bindGetParameters(values : object) : string
    {
        let url = this.content

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
     * Throw a binding error
     *
     */
    private throwBindingError(parameterName: string)
    {
        // Generate example method call for hint.
        const required = this.parameters.getRequired().getNames()

        const msg = `Cannot bind given parameters to url '${this.content}' - value of the required parameter '${parameterName}' is missing.`;
        const hint = `Try binding with the required values: {${required.join(', ')}}`;
        throw new ParameterBindingError(`${msg}\n${hint}`);
    }

    /**
     * Convert a given value to string according to the configured parameter type conversion function
     *
     */
    private convertToString(value: any) : string
    {
        if(typeof value !== 'string') {
            value = this.configuration.parameterTypeConversionFunction(value)

            if(value === null) {
                const msg = 'String conversion failed'
                throw new ParameterBindingError(msg)
            }
        }

        return value.trim()
    }
}
