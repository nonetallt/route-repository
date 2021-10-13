import UriConfigurationInterface from './UriConfigurationInterface'
import UriBuilderConfigurationInterface from './UriBuilderConfigurationInterface'

export default interface RouteRegistrarConfigurationInterface extends UriBuilderConfigurationInterface
{
    extra?: object
    uris?: UriConfigurationInterface
}
