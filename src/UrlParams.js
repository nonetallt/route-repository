import NullResourceException from './exceptions/NullResourceException';

export default class UrlParams
{
    constructor(uriString)
    {
        this.url = uriString;
        this.names = [];
        this.placeholders = [];
        
        // Parse the url parameter placeholders with surrounding [] brackets.
        let match = uriString.match(/\{.*?\}/);
        while(match !== null)
        {
            match = match[0];

            this.placeholders.push(match);
            // Remove the brackets for parameter names.
            this.names.push(match.slice(1, -1));

            uriString = uriString.replace(match,'');
            match = uriString.match(/\{.*?\}/);
        }
    }

    areRequired()
    {
        if(this.placeholders.length > 0) return true;
        return false;
    }

    required()
    {
        return this.names;
    }

    bind(values, bindGetParameters = false)
    {
        // Return base url if there's nothing to bind.
        if(this.placeholders.length < 1 && bindGetParameters === false) return this.url;

        // Bind using keys if provided. Do not process non-objects or null values
        if(typeof values === 'object' && values !== null && this.objectHasRequiredKeys(values))
        {
            return this.bindWithKeys(values, bindGetParameters);
        }

        // Typecast a single value to array.
        if(!Array.isArray(values)) values = [values];
        
        return this.bindWithValues(values);
    }

    // Checks that a given object has all named properties matching param
    // names.
    objectHasRequiredKeys(object)
    {
        for(let n = 0; n < this.names.length; n++)
        {
            if(!object.hasOwnProperty(this.names[n])) return false;
        }
        return true;
    }

    // Bind each value to a specified parameter key.
    bindWithKeys(values, bindGetParameters = false)
    {
        let url = this.url;
        for(let n = 0; n < this.names.length; n++)
        {
            let valueToBind = values[this.names[n]];
            if(valueToBind === undefined || valueToBind === null) this.bindingException(n);

            // Bind parameters.
            url = url.replace(this.placeholders[n], valueToBind);

            // Remove already bound values from the object
            delete values[this.names[n]];
        }

        // Bind rest of the parameters as get params if specified
        if(bindGetParameters) url = this.bindGetParameters(url, values);

        return url;
    }

    // Bind values in given order without caring about keys.
    bindWithValues(values)
    {
        let url = this.url;
        for(let n = 0; n < this.names.length; n++)
        {
            let valueToBind = values[n];
            if(valueToBind === undefined || valueToBind === null) this.bindingException(n);

            // Bind parameters.
            url = url.replace(this.placeholders[n], valueToBind);
        }
        return url;
    }

    bindGetParameters(url, values)
    {
        
        let names = Object.keys(values);
        for(let index = 0; index < names.length; index++)
        {
            // Append the query indicator for first param
            if(index === 0) url += '?';

            // For params after, start with & 
            else url += '&';

            // Append the ket value pair
            url += `${names[index]}=${values[names[index]]}`;
        }
        return url;
    }

    bindingException(paramIndex)
    {
        // Generate example method call for hint.
        let required = [];
        for(let n = 0; n < this.names.length; n++)
        {
            required.push(`${this.names[n]} : 'value'`);
        }

        let msgError = `Cannot bind required parameter '${this.names[paramIndex]}' - value does not exist.`;
        let msgHint = `Try binding with the required values: {${required.join(', ')}}`;
        throw new NullResourceException(`${msgError}\n${msgHint}`);
    }
}
