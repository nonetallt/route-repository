import UrlParameterCollection from './UrlParameterCollection'
import ParameterBindingError from './Error/ParameterBindingError'

export default class Url
{
    content : string
    parameters: UrlParameterCollection

    constructor(content: string)
    {
        this.content = content
        this.parameters = UrlParameterCollection.parseFromUrl(content)
    }

    toString() : string
    {
        return this.content
    }

    /**
     * Bind given values to the url parameter placeholders
     *
     */
    bind(values : string | Array<string> | object, bindGetParameters = false) : string
    {
        // Return base url if there's nothing to bind.
        if(this.parameters.length === 0 && bindGetParameters === false) {
            return this.content
        }

        // Bind using keys if provided. Do not process non-objects or null values
        if(typeof values === 'object') {
            return this.bindObject(values, bindGetParameters);
        }

        // Typecast a single value to array.
        if(! Array.isArray(values)) {
            values = [values];
        }

        return this.bindArray((values as Array<string>));
    }

    /**
     * Check if a given object has properties matching all required parameters
     *
     */
    canBindObject(object: object) : boolean
    {
        let canBind = true

        this.parameters.forEach(param => {
            if(!object.hasOwnProperty(param.name) && param.required) {
                canBind = false
                return false
            }
        })

        return canBind;
    }

    // Bind each value to a specified parameter key.
    bindObject(object : object, bindGetParameters: boolean = false) : string
    {
        let url = this.content

        this.parameters.forEach(parameter => {

            let valueToBind = (object as any)[parameter.name]

            valueToBind = valueToBind === undefined ? '' : String(valueToBind)

            if(parameter.required || valueToBind === '') {
                this.throwBindingError(parameter.name)
            }

            // Replace the placeholder with string value
            url = url.replace(parameter.placeholder, valueToBind);

            // Remove already bound values from the object's keys
            delete (object as any)[parameter.name];
        })

        // Bind rest of the parameters as get params if specified
        if(bindGetParameters) {
            url = this.bindGetParameters(object);
        }

        return url;
    }


    /**
     * Bind values in given order without caring about keys.
     *
     */
    bindArray(array: Array<string>) : string
    {
        let url = this.content;

        this.parameters.forEach((parameter, index) => {

            let valueToBind = array[index] ?? '';

            if(parameter.required || valueToBind === '') {
                this.throwBindingError(parameter.name);
            }

            // Bind parameters.
            url = url.replace(parameter.placeholder, valueToBind);
        })

        return url;
    }

    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    bindGetParameters(values : object) : string
    {
        let url = this.content

        for(const [key, value] of Object.entries(values)) {

            // Append the query indicator for first param
            if(url === '') url += '?';

            // For params after, start with &
            else url += '&';

            // Append the key value pair
            url += `${key}=${value}`;
        }

        return url;
    }

    /**
     * Throw a binding error
     *
     */
    throwBindingError(parameterName: string)
    {
        // Generate example method call for hint.
        const required = this.parameters.getRequired().getNames()

        const msgError = `Cannot bind required parameter '${parameterName}' - value does not exist.`;
        const msgHint = `Try binding with the required values: {${required.join(', ')}}`;
        throw new ParameterBindingError(`${msgError}\n${msgHint}`);
    }
}
