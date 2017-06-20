export default class UrlParams
{
    constructor(uriString)
    {
        // Parse the url parameter name without surrounding [] brackets.
        this.params = uri.match(/\[(.*?)\]/);
    }

    bind(values)
    {
        if(object.keys(values).length > 0)
        {
            return bindWithKeys(values);
        }
        if(Array.isArray(values))
        {
            return bindWithValues(values);
        }
        throw new TypeError('Bound values type must be either an object or an array');
    }

    // Bind each value to a specified parameter key.
    bindWithKeys(values)
    {
        for(n = 0; n < this.params.length; n++)
        {
            let valueToBind = values[this.params[n]];
            if(valueToBind === undefined || valueToBind === null) bindingException();

            // Bind parameters.
            url = url.replace(/\[(.*)\]/, valueToBind);
        }
    }

    // Bind values in given order without caring about keys.
    bindWithValues(values)
    {
        for(n = 0; n < this.params.length; n++)
        {
            let valueToBind = values[n];
            if(valueToBind === undefined || valueToBind === null) bindingException();

            // Bind parameters.
            url = url.replace(/\[(.*)\]/, valueToBind);
        }
    }

    bindingException(parameterName)
    {
        // Generate example method call for hint.
        let required = [];
        for(n = 0; n < this.params.length; n++)
        {
            required[] = `${this.params[n]} : 'value'`;
        }

        let msgError = `Cannot bind required parameter '${parameterName}' - value does not exist.`;
        let msgHint = `Try binding with the required values: {${required.join(', ')}}`;
        throw new NullResourceException(`${msgError}\n${msgHint}`);
    }
}
