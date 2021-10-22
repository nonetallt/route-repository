import UriParameter from './UriParameter'
import UriParameterSyntaxError from './error/UriParameterSyntaxError'

const parseRegex = new RegExp(/\{.*?\}/)

export default class UriParameterCollection extends Array<UriParameter>
{
    constructor(...items : Array<UriParameter>)
    {
        super(...items)
    }

    /**
     * Create a new uri parameter collection from parameter placeholders in a given uri string
     *
     * @throws UriParameterSyntaxError
     *
     */
    static fromUriString(uri: string) : UriParameterCollection
    {
        const parameters = []

        // Parse the uri parameter placeholders with surrounding {curiy braces}.
        let match = uri.match(parseRegex)
        let lastParameterOptional = false

        while(match !== null) {

            const placeholder = match[0];
            const parameter = new UriParameter(placeholder)

            if(lastParameterOptional && parameter.required) {
                const msg = `Invalid parameters for uri: '${uri}', all optional parameters must be declared after required ones.`
                throw new UriParameterSyntaxError(msg)
            }

            lastParameterOptional = ! parameter.required

            parameters.push(parameter)
            uri = uri.replace(placeholder, '');
            match = uri.match(parseRegex);
        }

        return new UriParameterCollection(...parameters)
    }

    /**
     * Check if any uri parameters are required
     *
     */
    areRequired() : boolean
    {
        let required = false

        for(const [index, parameter] of this.entries()) {
            if(parameter.required) {
                required = true
                break
            }
        }

        return required
    }

    /**
     * Get a list of the required uri parameters
     *
     */
    getRequired() : UriParameterCollection
    {
        return new UriParameterCollection(...this.filter(parameter => {
            return parameter.required
        }))
    }

    /**
     * Get names of all parameters
     *
     */
    getNames() : Array<string>
    {
        return this.map(parameter => parameter.name)
    }

    /**
     * Get the parameter with the given name
     *
     */
    getParameter(name: string) : UriParameter | null
    {
        const parameter = this.find(param => param.name === name)

        if(parameter === undefined) {
            return null
        }

        return parameter
    }
}
