import RouteRepository from './RouteRepository'
import RouteRegistrar from './RouteRegistrar'
import Route from './Route'
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

    constructor(repository: RouteRepository, config: ConfigurationInterface = {})
    {
        super(new Configuration(config))
        this.repository = repository
    }

    storeRoute(route: Route) : void
    {
        this.repository.storeRoute(route)
    }
}
