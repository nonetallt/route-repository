import Url from './Url'
import RequestMethodType from './RequestMethodType';

export default class Route
{
    readonly name: string
    readonly method: RequestMethodType
    readonly url: Url
    readonly extra: object

    constructor(name: string, method: RequestMethodType, url: string | Url, extra: object = {})
    {
        this.name = name
        this.method = method
        this.url = typeof url === 'string' ? new Url(url) : url
        this.extra = extra
    }
}
