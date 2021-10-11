import RouteRegistrationMiddlewareInterface from '../../contract/RouteRegistrationMiddlewareInterface'
import RouteRegistrarConfiguration from '../../config/RouteRegistrarConfiguration'
import Url from '../../Url'
import Route from '../../Route'

export default class ApplyConfiguration implements RouteRegistrationMiddlewareInterface
{
    readonly configuration: RouteRegistrarConfiguration

    constructor(config: RouteRegistrarConfiguration)
    {
        this.configuration = config
    }

    apply(route: Route) : Route
    {
        const url = this.updateUrl(route)
        const extra = Object.assign(route.extra, this.configuration.extra)

        return new Route(route.name, route.method, url, extra)
    }

    private updateUrl(route: Route) : Url
    {
        if(this.configuration.prefix.length > 0) {
            const urlString = this.configuration.prefix + route.url.toString()
            const urlConfig = Object.assign(route.url.configuration, this.configuration.urls)
            return new Url(urlString, urlConfig)
        }

        return route.url
    }
}
