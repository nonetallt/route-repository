import UriInterface from './UriInterface'
import RequestMethodType from '../RequestMethodType'

export default interface RouteInterface
{
    name: string
    method: RequestMethodType
    uri: string | UriInterface
    extra?: object
}
