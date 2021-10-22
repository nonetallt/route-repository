import ConfigurationInterface from './contract/UriConfigurationInterface';
import UriComponentType from './UriComponentType';
import UriParameterBinderConfigurationInterface from './contract/UriParameterBinderConfigurationInterface';
import QueryParameterCollection from './QueryParameterCollection';
import UriParameterCollection from './UriParameterCollection';
export default class Uri {
    private builder;
    private binder;
    private configuration;
    /**
     * Create a new uri
     *
     *  @throws UriSyntaxError
     *
     */
    constructor(uri: string | Map<UriComponentType, string>, config?: ConfigurationInterface);
    /**
     * Get a string representation
     *
     */
    toString(): string;
    /**
     * Check if this uri is absolute
     *
     */
    isAbsolute(): boolean;
    /**
     * Check if this uri is relative
     *
     */
    isRelative(): boolean;
    /**
     * Get uri scheme component
     *
     */
    get scheme(): string | null;
    /**
     * Get uri userinfo component, containing both username and password
     *
     */
    get userinfo(): string | null;
    /**
     * Get uri user component
     *
     */
    get username(): string | null;
    /**
     * Get uri password component
     *
     */
    get password(): string | null;
    /**
     * Get uri host component
     *
     */
    get host(): string | null;
    /**
     * Get uri port component
     *
     */
    get port(): number | null;
    /**
     * Get uri path component
     *
     */
    get path(): string | null;
    /**
     * Get query string
     *
     */
    get queryString(): string | null;
    /**
     * Get query parameters
     *
     */
    get queryParameters(): QueryParameterCollection | null;
    /**
     * Get fragment component
     *
     */
    get fragment(): string | null;
    /**
     * Get all uri components
     *
     */
    get components(): Map<UriComponentType, string>;
    /**
     * Get the uri parameters
     *
     */
    get uriParameters(): UriParameterCollection;
    /**
     * Bind given values as uri parameters
     *
     * @throws UriParameterBindingError
     *
     */
    bindParameters(values: any, config?: UriParameterBinderConfigurationInterface | null): string;
    /**
     * Get uri component
     *
     */
    getComponent(component: UriComponentType): string | null;
    /**
     * Check if the uri has the given component
     *
     */
    hasComponent(component: UriComponentType): boolean;
    /**
     * Create a new instance of this uri with the given component uri component
     *
     */
    withComponent(component: UriComponentType, value: string): Uri;
    /**
     *  Set the value of a given component
     *
     */
    protected setComponent(component: UriComponentType, value: string): void;
}
