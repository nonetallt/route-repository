import UrlParameter from './UrlParameter'
import ParameterBindingError from './Error/ParameterBindingError'

export default class UrlParameterCollection extends Array<UrlParameter>
{
    constructor(...items : Array<UrlParameter>)
    {
        super(...items)
    }

    static parseFromUrl(url: string) : UrlParameterCollection
    {
        const parameters = []

        // Parse the url parameter placeholders with surrounding {curly braces}.
        const pattern = /\{.*?\}/
        let match = url.match(pattern)

        while(match !== null) {

            const placeholder = match[0];
            parameters.push(new UrlParameter(placeholder))
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
}
