import ParameterBindingError from './Error/ParameterBindingError'

export default class UrlParameters
{
    url: string
    names: Array<string>
    placeholders: Array<string>

    constructor(url : string)
    {
        this.url = url;
        this.names = [];
        this.placeholders = [];

        // Parse the url parameter placeholders with surrounding {curly braces}.
        let match = url.match(/\{.*?\}/);

        while(match !== null) {

            let placeholder = match[0];

            this.placeholders.push(placeholder);
            // Remove the brackets for parameter names.
            this.names.push(placeholder.slice(1, -1));

            url = url.replace(placeholder,'');
            match = url.match(/\{.*?\}/);
        }
    }

    /**
     * Check if the url parameters are required
     *
     */
    areRequired() : boolean
    {
        return this.placeholders.length > 0
    }

    /**
     * Get a list of the required url parameters
     *
     */
    getRequired() : Array<string>
    {
        return this.names;
    }

    /**
     * Bind given values to the url
     *
     */
    bind(values : string | Array<string> | object, bindGetParameters = false) : string
    {
        // Return base url if there's nothing to bind.
        if(this.placeholders.length < 1 && bindGetParameters === false) {
            return this.url;
        }

        // Bind using keys if provided. Do not process non-objects or null values
        if(typeof values === 'object' && values !== null && this.canBind(values)) {
            return this.bindWithKeys(values, bindGetParameters);
        }

        // Typecast a single value to array.
        if(! Array.isArray(values)) {
            values = [values];
        }

        return this.bindWithValues(values);
    }

    /**
     * Check if a given object has properties matching all required parameters
     *
     */
    canBind(object: object) : boolean
    {
        for(let n = 0; n < this.names.length; n++) {
            if(!object.hasOwnProperty(this.names[n])) return false;
        }

        return true;
    }

    // Bind each value to a specified parameter key.
    bindWithKeys(object : object, bindGetParameters: boolean = false) : string
    {
        let url = this.url;
        for(let n = 0; n < this.names.length; n++) {

            let valueToBind = object[this.names[n]];

            if(valueToBind === undefined || valueToBind === null) {
                this.bindingException(n);
            }

            // Bind parameters.
            url = url.replace(this.placeholders[n], valueToBind);

            // Remove already bound values from the object
            delete object[this.names[n]];
        }

        // Bind rest of the parameters as get params if specified
        if(bindGetParameters) url = this.bindGetParameters(url, object);

        return url;
    }

    // Bind values in given order without caring about keys.
    bindWithValues(values: Array<string>) : string
    {
        let url = this.url;

        for(let n = 0; n < this.names.length; n++) {

            let valueToBind = values[n];
            if(valueToBind === undefined || valueToBind === null) this.bindingException(n);

            // Bind parameters.
            url = url.replace(this.placeholders[n], valueToBind);
        }

        return url;
    }

    bindGetParameters(url: string, values : object) : string
    {
        let names = Object.keys(values);

        for(let index = 0; index < names.length; index++) {

            // Append the query indicator for first param
            if(index === 0) url += '?';

            // For params after, start with &
            else url += '&';

            // Append the ket value pair
            url += `${names[index]}=${values[names[index]]}`;
        }

        return url;
    }

    bindingException(paramIndex: number)
    {
        // Generate example method call for hint.
        let required = [];

        for(let n = 0; n < this.names.length; n++) {
            required.push(`${this.names[n]} : 'value'`);
        }

        const msgError = `Cannot bind required parameter '${this.names[paramIndex]}' - value does not exist.`;
        const msgHint = `Try binding with the required values: {${required.join(', ')}}`;
        throw new ParameterBindingError(`${msgError}\n${msgHint}`);
    }
}
