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
        this.uri = typeof uri === 'string' ? new Uri(uri) : uri
        this.extra = extra
    }
}
