import RequestMethod from './RequestMethod';

export default class Route
{
    name: string
    method: RequestMethod
    url: string

    constructor(name: string, method: RequestMethod, url: string)
    {
        this.name = name
        this.method = method
        this.url = url
    }

    /**
     * Apply a given prefix to the route url
     *
     */
    applyPrefix(prefix: string)
    {
        this.url = prefix + this.url
    }

    /**
     * Bind given parameter values to the route url parameter placeholders
     *
     */
    bindUrl(values : string | Array<string> | object) : string
    {

        return this.url
    }
}
