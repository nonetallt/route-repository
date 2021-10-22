import RouteRepository from './RouteRepository';
import RouteRegistrar from './RouteRegistrar';
import Route from './Route';
import ConfigurationInterface from './contract/RouteRegistrarConfigurationInterface';
/**
 * This class acts as a container for temporary configuration that can be
 * used to register a group of routes for a given repository
 *
 */
export default class RouteGroupRegistrar extends RouteRegistrar {
    private repository;
    constructor(repository: RouteRepository, config?: ConfigurationInterface);
    storeRoute(route: Route): void;
}
