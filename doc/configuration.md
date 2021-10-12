# Configuration

## Hierarchy

```javascript
{
    mutable: false,
    duplicates: false,
    extra: {},
    uris: {
        prependSlash: true,
        defaultScheme: null,
        overrideScheme: null,
        parameters: {
            acceptWhitespace: false,
            bindGetParameters: false,
            encodeUriParameters: true,
            encodeGetParameters: true,
            typeConversionFunction: (parameterValue: any) => {
                return String(parameterValue)
            }
        }
    },
    baseUri: {
        uri: null,
        mergeQuery: false
    }
}
```

Note that **mutable** and **duplicates** are not available inside registration groups.

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

Extra defines any abitrary information you want this registrar to pass into each registered Route object.

#### uris

- Type: UriConfigurationInterface
- Default: `{}`

Configuration applied to each uri registered through this registrar.

#### baseUri

- Type: BaseUriConfigurationInterface
- Default: `null`

The base uri of each route registered through this registrar.

## UriConfiguration

Configuration of an uri. Applies to all uris of the given registrar.

#### prependSlash

- Type: boolean
- Default: `true`

Whether the uri should be preceded by a leading `/` character. This determines if the uri will be considered as relative or absolute when it does not begin with a protocol (either `http://` or `https://`).

#### defaultScheme

- Type: `'http'` | `'https'` | `null`
- Default: `null`

Determines the default uri scheme that should be used if not explicitly set.

#### overrideScheme

- Type: `'http'` | `'https'` | `null`
- Default: `null`

Determines the uri scheme that should replace every explictly set uri scheme.

#### baseUri

- Type: string
- Default: `''`

## UriParameterConfiguration

Configuration of uri parameters. Applies to all parameters of a given uri.

## BaseUriConfiguration

Configuration of the base uri of a given route registrar.

#### uri

- Type: string | Uri
- **Required**

The base uri.

#### mergeQuery

- Type: boolean
- Default: `false`

Determines whether get parameters of the base uri should be added to registered uris.
