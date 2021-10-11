import RouteRepository from './RouteRepository'
import RouteRegistrar from './RouteRegistrar'
import Route from './Route'
import Url from './Url'
import Configuration from './config/RouteRegistrarConfiguration'
import ConfigurationInterface from './contract/RouteRegistrarConfigurationInterface'

/**
 * This class acts as a container for temporary configuration that can be
 * used to register a group of routes for a given repository
 *
 */
export default class RouteGroupRegistrar extends RouteRegistrar
{
    private repository: RouteRepository
    private configuration: Configuration

    constructor(repository: RouteRepository, config: ConfigurationInterface = {})
    {
        const configuration = new Configuration(config)
        super(configuration)
        this.repository = repository
        this.configuration = configuration
    }

    registerRoute(route: Route) : void
    {
        this.repository.register(route.name, route.method, route.url.toString(), route.extra)
    }
}
