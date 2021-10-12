import Uri from './Uri'
import RequestMethodType from './RequestMethodType';

export default class Route
{
    readonly name: string
    readonly method: RequestMethodType
    readonly uri: Uri
    readonly extra: object

    constructor(name: string, method: RequestMethodType, uri: string | Uri, extra: object = {})
    {
        this.name = name
        this.method = method
        this.uri = uri instanceof Uri ? uri : new Uri(uri)
        this.extra = extra
    }
}
