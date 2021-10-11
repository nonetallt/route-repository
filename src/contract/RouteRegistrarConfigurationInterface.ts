import UrlConfigurationInterface from './UrlConfigurationInterface'
import BaseUrlConfigurationInterface from './BaseUrlConfigurationInterface'

export default interface RouteRegistrarConfigurationInterface
{
    extra?: object
    urls?: UrlConfigurationInterface
    baseUri?: BaseUrlConfigurationInterface
}
