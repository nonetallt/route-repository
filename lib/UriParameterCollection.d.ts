import UriParameter from './UriParameter';
export default class UriParameterCollection extends Map<string, UriParameter> {
    /**
     * Create a new uri parameter collection from parameter placeholders in a given uri string
     *
     * @throws UriParameterSyntaxError
     *
     */
    static fromUriString(uri: string): UriParameterCollection;
    /**
     * Check if any uri parameters are required
     *
     */
    areRequired(): boolean;
    /**
     * Get a list of the required uri parameters
     *
     */
    getRequired(): UriParameterCollection;
    /**
     * Get names of all parameters
     *
     */
    getNames(): Array<string>;
    /**
     * Get the parameter with the given name
     *
     */
    getParameter(name: string): UriParameter | null;
    /**
     * Return the 'first' parameter as indicated by iterator keys
     *
     */
    first(): UriParameter | null;
}
