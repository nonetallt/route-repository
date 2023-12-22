import ConfigurationInterface from './contract/UriParameterBinderConfigurationInterface';
/**
 * Not part of the external API, use Uri as a wrapper
 *
 */
export default class UriParameterBinder {
    private configuration;
    constructor(config?: ConfigurationInterface);
    /**
     * Bind given values to the uri parameter placeholders
     *
     *  @throws UriParameterBindingError
     *
     */
    bind(uri: string, values: any, config?: ConfigurationInterface | null): string;
    /**
     * Bind each object property to a to the parameter with a matching name.
     *
     */
    private bindObject;
    /**
     * Bind values in given order without caring about keys.
     *
     */
    private bindArray;
    /**
     * Bind a given plain value
     *
     */
    private bindValue;
    /**
     * Bind given object's properties as key value pairs for GET parameters
     *
     */
    private bindGetParameters;
    /**
     * Bind a single value to parameter of the given uri string
     *
     */
    private bindParameter;
    /**
     * Removes trailing slashes from a given string
     *
     */
    private removeTrailingSlashes;
    /**
     * Convert a given value to string according to the configured parameter type conversion function
     *
     */
    private stringValue;
    private collectArrayGetParameters;
}
