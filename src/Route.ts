import RequestMethod from './RequestMethod';
import Url from './Url'

export default class Route
{
    name: string
    method: RequestMethod
    url: Url

    constructor(name: string, method: RequestMethod, url: string | Url)
    {
        this.name = name
        this.method = method
        this.url = typeof url === 'string' ? new Url(url) : url
    }

    /**
     * Apply a given prefix to the route url
     *
     */
    applyPrefix(prefix: string)
    {
        this.url.content = prefix + this.url.content
    }

    /**
     * Bind given parameter values to the route url parameter placeholders
     *
     */
    bindUrl(values : string | Array<string> | object) : string
    {

        /* TODO: try catch wrap binding exception, invoke new one that exposes route name and url in error message */


        return this.url.content
    }
}
