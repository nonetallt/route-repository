import UriComponentType from './UriComponentType';
import ConfigurationInterface from './contract/UriBuilderConfigurationInterface';
/**
 * Internal, should not be part of the public API
 *
 */
export default class UriBuilder extends Map<UriComponentType, string> {
    private configuration;
    constructor(components: Map<UriComponentType, string>, config?: ConfigurationInterface);
    /**
     * @throws UriSyntaxError
     *
     */
    static fromUriString(uri: string, config?: ConfigurationInterface): UriBuilder;
    build(): string;
    private applyBaseUri;
    /**
     * Get an uri component with added content, internal build use
     *
     */
    private getComponentString;
}
