/**
 * A simple enum that contains valid HTTP methods
 *
 */
export enum RequestMethod
{
    GET     = 'GET',
    POST    = 'POST',
    PUT     = 'PUT',
    PATCH   = 'PATCH',
    DELETE  = 'DELETE',
    HEAD    = 'HEAD',
    CONNECT = 'CONNECT',
    OPTIONS = 'OPTIONS',
    TRACE   = 'TRACE'
}

type RequestMethodType = `${RequestMethod}`

export default RequestMethodType
