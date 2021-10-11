import RouteRegistrationMiddlewareInterface from '../../contract/RouteRegistrationMiddlewareInterface'
import RouteRegistrarConfiguration from '../../config/RouteRegistrarConfiguration'
import Uri from '../../Uri'
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
        const uri = this.updateUri(route)
        const extra = Object.assign(route.extra, this.configuration.extra)

        return new Route(route.name, route.method, uri, extra)
    }

    private updateUri(route: Route) : Uri
    {
        if(this.configuration.baseUri === null) {
            return route.uri
        }

        const uriConfig = Object.assign(route.uri.configuration, this.configuration.uris)
        return new Uri(route.uri.components, uriConfig, this.configuration.baseUri)
    }
}
