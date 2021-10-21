# Configuration

## Hierarchy

```javascript
{
    mutable: false,
    duplicates: false,
    extra: {},
    uris: {
        prependSlash: true,
        baseUri: null,
        mergeQuery: false,
        defaultScheme: null,
        overrideScheme: null,
        parameters: {
            bindGetParameters: false,
            encodeUriParameters: true,
            encodeGetParameters: true,
            typeConversionFunction: (parameterValue: any) => {
                return String(parameterValue)
            }
        }
    },
    registrationMiddleware: []
}
```

Note that **mutable** and **duplicates** are not available in [registration group](registration.md#registering-routes-as-groups) configuration.

## RouteRepositoryConfiguration

Configuration of the repository storing route information.

#### mutable

- Type: boolean
- Default: `false`

Mutable defines whether registered aliases can be changed after registration by overriding an alias with another registration.
It's recommended to keep this 'false' in order to avoid unexpected state changes in your application.

#### duplicates

- Type: boolean
- Default: `false`

Duplicates define whether the same route can be referenced to by multiple different aliases.



## RouteRegistrarConfiguration

Configuration of an object that's capable of registering routes.

#### extra

- Type: object
- Default: `{}`

Extra defines any abitrary information you want this registrar to pass into each registered [Route object](generated/classes/Route.md). Can be used to store any sort of route information [from the back-end](server-side-integration) and various other pieces of data for display and application logic purposes.

For example, you could store route permissions to extra.permissions and check if a given user has the permission to access that back-end route before they actually send the request, thus saving server resources (NOTE: this is not a replacement for server-side validation).

#### uris

- Type: [UriConfigurationInterface](generated/interfaces/UriConfigurationInterface.md)
- Default: `{}`

Configuration applied to each URI registered through this registrar.

#### registrationMiddleware

- Type: Array<[RouteMiddlewareInterface](generated/interfaces/RouteMiddlewareInterface)>
- Default: []

An array containing middlewares that should be applied before each route registration. This is mainly useful for modifying routes before they are registered using the with -prefix methods of [Route](generated/classes/Route.md). If you wish to abort registration of a given route, you should throw a [RegistrationError](generated/classes/RegistrationError) inside the [applyMiddleware](generated/interfaces/RouteMiddlewareInterface#applymiddleware) method.

## UriConfiguration

Configuration of an URI. Applies to all URIs of the given registrar.

#### mergeQuery

- Type: boolean
- Default: `false`

Determines whether GET parameters of the base URI should be added to registered URIs. If `true` and [baseUri](#baseUri) contains a query component, any given route will also include the query component. If both the baseUri query and new URI have same parameters, the values of the new URI will be used.

#### prependSlash

- Type: boolean
- Default: `true`

Whether the URI should be preceded by a leading `/` character. This determines if the URI will be considered as relative or absolute when it does not begin with a protocol (either `http://` or `https://`).

#### baseUri

- Type: string | Uri
- Default: `null`

The base URI prepended before registered relative URIs. If the baseUri is itself relative, it will be applied as a path prefix. The baseUri will never be applied to absolute URIs (URIs that contain a host component).

#### defaultScheme

- Type: `'http'` | `'https'` | `null`
- Default: `null`

Determines the default URI scheme that should be used if a given URI is absolute but does not define a scheme. This option is redundant if [overrideScheme](#overrideScheme) is also set and not `null`.

#### overrideScheme

- Type: `'http'` | `'https'` | `null`
- Default: `null`

Determines the URI scheme that should always be used when a given URI is absolute. Mostly useful for forcing secure HTTPS scheme for absolute URIs.

#### parameters

- Type: [UriParameterBinderConfigurationInterface](generated/interfaces/UriParameterBinderConfigurationInterface)
- Default: `{}`

Configuration applied to each URI registered through this registrar.



## UriParameterBinderConfiguration

Configuration used when [binding URI parameters](uri-parameters.md).

#### bindGetParameters

- Type: boolean
- Default: `false`

Whether key-value pairs of a given object that can't be bound to URI parameters should be included as GET parameters.

#### encodeUriParameters

- Type: boolean
- Default: `true`

Whether URI parameters of the URI should be URL encoded.

#### encodeGetParameters

- Type: boolean
- Default: `true`

Whether GET parameters of the URI should be URL encoded.

#### typeConversionFunction

- Type: `'http'` | `'https'` | `null`
- Default:
```javascript
/**
* @throws TypeConversionError
*/
(parameterValue: any) => {
    return String(parameterValue)
} : string
```

Type conversion function applied to convert any given value into a displayable string when binding values to URI parameters. The function **must** return a string or throw [TypeConversionError](generated/classes/TypeConversionError.md) if the value can't be converted.
