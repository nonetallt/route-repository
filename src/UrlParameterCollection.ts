import UrlParameter from './UrlParameter'
import ParameterBindingError from './error/ParameterBindingError'

export default class UrlParameterCollection extends Array<UrlParameter>
{
    constructor(...items : Array<UrlParameter>)
    {
        super(...items)
    }

    /**
     * Create a new url parameter collection from parameter placeholders in a given url string
     *
     */
    static parseFromUrl(url: string) : UrlParameterCollection
    {
        const parameters = []

        // Parse the url parameter placeholders with surrounding {curly braces}.
        const pattern = /\{.*?\}/
        let match = url.match(pattern)
        let lastParameterOptional = false

        while(match !== null) {

            const placeholder = match[0];
            const parameter = new UrlParameter(placeholder)

            if(lastParameterOptional && parameter.required) {
                const msg = `Invalid parameters for url: '${url}', all optional parameters must be declared after required ones`
                throw new ParameterBindingError(msg)
            }

            lastParameterOptional = ! parameter.required

            parameters.push(parameter)
            url = url.replace(placeholder, '');
            match = url.match(pattern);
        }

        return new UrlParameterCollection(...parameters)
    }

    /**
     * Check if any url parameters are required
     *
     */
    areRequired() : boolean
    {
        let required = false

        this.forEach(parameter => {
            if(parameter.required) {
                required = true
                return false
            }
        })

        return required
    }

    /**
     * Get a list of the required url parameters
     *
     */
    getRequired() : UrlParameterCollection
    {
        return new UrlParameterCollection(...this.filter(parameter => {
            return parameter.required
        }))
    }

    /**
     * Get names of all parameters
     *
     */
    getNames() : Array<string>
    {
        return this.map(parameter => {
            return parameter.name
        })
    }

    /**
     * Get the parameter with the given name
     *
     */
    getParameter(name: string) : UrlParameter
    {
        const parameter = this.find(param => param.name === name)

        if(parameter === undefined) {
            const msg = `Parameter '${name}' does not exist`
            throw new ParameterBindingError(msg)
        }

        return parameter
    }

    /**
     * Bind a single value to parameter of the given url string
     *
     */
    bindParameter(url: string, parameter: string | UrlParameter, value: string) : string
    {
        let urlParameter : UrlParameter

        try {
            urlParameter = typeof parameter === 'string' ? this.getParameter(parameter) : parameter
        }
        catch(error) {
            if(error instanceof ParameterBindingError) {
                const msg = `Cannot bind non-existent parameter '${parameter}' to url '${url}'`
                throw new ParameterBindingError(msg, error)
            }
            throw error
        }

        if(urlParameter.required && value.trim().length === 0) {
            const msg = `Cannot bind empty value '${parameter}' to url '${url}'`
            throw new ParameterBindingError(msg)
        }

        return url.replace(urlParameter.placeholder, encodeURIComponent(value));
    }
}
