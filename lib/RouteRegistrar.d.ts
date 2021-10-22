import UriComponentType from './UriComponentType';
import Route from './Route';
import RequestMethodType from './RequestMethodType';
import Configuration from './config/RouteRegistrarConfiguration';
import ConfigurationInterface from './contract/RouteRegistrarConfigurationInterface';
import RouteInterface from './contract/RouteInterface';
/**
 * Describes a class that can register routes
 *
 */
export default abstract class RouteRegistrar {
    protected configuration: Configuration;
    constructor(config: ConfigurationInterface);
    /**
     * Register a new route using a route object. This method has the responsibility of actually storing the route.
     *
     * @throws RegistrationError
     * @internal
     *
     */
    abstract storeRoute(route: Route): void;
    /**
     * Create and register a new route from parameters
     *
     * @throws RegistrationError
     *
     */
    register(name: string, method: RequestMethodType, uri: string | Map<UriComponentType, string>, extra?: object): void;
    /**
     * Register all routes from a given schema
     *
     * @throws RegistrationError
     *
     */
    registerAll(routes: Array<RouteInterface> | string): void;
    /**
     * Register a new get route
     *
     * @throws RegistrationError
     *
     */
    get(name: string, uri: string, extra?: object): void;
    /**
     * Register a new post route
     *
     * @throws RegistrationError
     *
     */
    post(name: string, uri: string, extra?: object): void;
    /**
     * Register a new put route
     *
     * @throws RegistrationError
     *
     */
    put(name: string, uri: string, extra?: object): void;
    /**
     * Register a new patch route
     *
     * @throws RegistrationError
     *
     */
    patch(name: string, uri: string, extra?: object): void;
    /**
     * Register a new delete route
     *
     * @throws RegistrationError
     *
     */
    delete(name: string, uri: string, extra?: object): void;
    /**
     * Apply registration middleware to a given route
     *
     */
    private applyRegistrationMiddleware;
}
