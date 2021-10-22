import Route from './Route';
import RouteRegistrar from './RouteRegistrar';
import RouteRegistrarConfigurationInterface from './contract/RouteRegistrarConfigurationInterface';
import Configuration from './config/RouteRepositoryConfiguration';
import ConfigurationInterface from './contract/RouteRepositoryConfigurationInterface';
import RequestMethodType from './RequestMethodType';
export default class RouteRepository extends RouteRegistrar {
    private routes;
    private signatures;
    protected configuration: Configuration;
    constructor(config?: ConfigurationInterface);
    /**
     * Stores a route. Note that this does not apply any registrar configuration or middlewares associated with registration.
     *
     * @throws RegistrationError
     * @internal
     *
     */
    storeRoute(route: Route): void;
    /**
     * Count the number of routes
     *
     */
    countRoutes(): number;
    /**
     * Get a route with the given name
     *
     */
    getRoute(name: string): Route | null;
    /**
     * Check if a route with a given name exists
     *
     */
    hasRouteWithName(name: string): boolean;
    /**
     * Check if a route with a given uri and optionally method, exists
     *
     */
    hasRouteWithUri(uri: string, ...methods: Array<RequestMethodType>): boolean;
    /**
     * Get a string representation of a given route's destination
     *
     */
    private routeSignature;
    /**
     * Register routes using same registrar settings for the whole group
     *
     */
    group(config: RouteRegistrarConfigurationInterface, callback: (registrar: RouteRegistrar) => void): void;
    /**
     * Get a formatted list of all registered routes.
     *
     */
    listRoutes(): string;
}
