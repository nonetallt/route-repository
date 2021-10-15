import Uri from './Uri'
import RequestMethodType from './RequestMethodType';
import UriComponent from './UriComponent'
import cloneDeep from 'lodash.clonedeep'

export default class Route
{
    readonly name: string
    readonly method: RequestMethodType
    private _uri: Uri
    readonly extra: object

    constructor(name: string, method: RequestMethodType, uri: string | Uri, extra: object = {})
    {
        this.name = name
        this.method = method
        this._uri = uri instanceof Uri ? uri : new Uri(uri)
        this.extra = extra
    }

    withName(name: string) : Route
    {
        return new Route(name, this.method, this.uri, this.extra)
    }

    withMethod(method: RequestMethodType) : Route
    {
        return new Route(this.name, method, this.uri, this.extra)
    }

    withUri(uri: string | Uri) : Route
    {
        return new Route(this.name, this.method, uri, this.extra)
    }

    withUriComponent(component: UriComponent, value: string) : Route
    {
        const instance = cloneDeep(this)
        instance.setUriComponent(component, value)

        return instance
    }

    withExtra(extra: object) : Route
    {
        return new Route(this.name, this.method, this.uri, extra)
    }

    protected setUriComponent(component: UriComponent, value: string)
    {
        this.uri = this.uri.withComponent(component, value)
    }

    public get uri() : Uri
    {
        return this._uri
    }

    private set uri(uri: Uri)
    {
        this._uri = uri
    }
}
