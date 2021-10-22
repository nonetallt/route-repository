import UriParameterBinderConfigurationInterface from './UriParameterBinderConfigurationInterface';
import UriBuilderConfigurationInterface from './UriBuilderConfigurationInterface';
export default interface UriConfigurationInterface extends UriBuilderConfigurationInterface {
    prependSlash?: boolean;
    parameters?: UriParameterBinderConfigurationInterface;
}
