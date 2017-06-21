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

    bind(values)
    {
        // Return base url if there's nothing to bind.
        if(this.placeholders.length < 1) return this.url;

        // Bind using keys if provided.
        if(this.objectHasRequiredKeys(values))
        {
            return this.bindWithKeys(values);
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
