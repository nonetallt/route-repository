import UriConfigurationInterface from './UriConfigurationInterface'
import BaseUriConfigurationInterface from './BaseUriConfigurationInterface'

export default interface RouteRegistrarConfigurationInterface
{
    extra?: object
    uris?: UriConfigurationInterface
    baseUri?: BaseUriConfigurationInterface | null
}
