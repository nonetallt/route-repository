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

    static is_object(value)
    {
        for(let property in value)
        {
            if(value.hasOwnProperty(property)) return true;
        }
        return false;
    }

    bind(values)
    {
        // Bind using keys if provided.
        if(UrlParams.is_object(values))
        {
            return this.bindWithKeys(values);
        }

        // Typecast a single value to array.
        if(!Array.isArray(values)) values = [values];
        
        return this.bindWithValues(values);
    }

    // Bind each value to a specified parameter key.
    bindWithKeys(values)
    {
        let url = this.url;
        for(let n = 0; n < this.names.length; n++)
        {
            let valueToBind = values[this.names[n]];
            if(valueToBind === undefined || valueToBind === null) this.bindingException(n);

            // Bind parameters.
            url = url.replace(this.placeholders[n], valueToBind);
        }
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
