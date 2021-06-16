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

    applyPrefix(prefix: string)
    {
        this.url = prefix + this.url
    }
}
