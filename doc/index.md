# Documentation

- [Configuration](./configuration.md)
- [Registering routes](./registration.md)
- [Binding URI parameters]('./uri_parameters.md')
- [Server-side integration](./server_side_integration.md)

## Public API (1.0.0)

This package uses [semantic versioning](https://semver.org/), meaning that you should use the caret (`^`) range version when including this package.

Example in `package.json`:

```json
{
    "require": {
        "route-repository": "^1.0.0"
    }
}
```

Note that with the exception of [RouteRepository](/generated/RouteRepository.md) when [configuration.mutable](./configuration.md#mutable) is set as `true`, all objects are ment as read-only. This is by design and is intended to provide pure functionality by minimizing state changing side effects which tend to cause unexpected bugs.

#### Class

Core classes provided by the package:

- [Route](/generated/Route.md)
- [RouteRepository](/generated/RouteRepository.md)
- [Uri](/generated/Uri.md)
- [UriParameter](/generated/UriParameter.md)
- [UriParameterCollection](/generated/UriParameterCollection.md)
- [QueryParameterCollection](/generated/QueryParameterCollection.md)

#### Enum

Enums that are accepted by some public API methods:

- [RequestMethod](/generated/RequestMethod.md)
- [UriComponent](/generated/UriComponent.md)

#### Type

The enums have separate type definitions that accept string unions instead of the stricter enum type:

- [RequestMethodType](/generated/RequestMethodType.md)
- [UriComponentType](/generated/UriComponentType.md)

#### Interface

Interfaces provided as part of the public API describe user supplied objects:

- [UriInterface](/generated/UriInterface.md)
- [RouteInterface](/generated/RouteInterface.md)
- [RouteMiddlewareInterface](/generated/RouteMiddlewareInterface.md)
- [RouteRepositoryConfigurationInterface](/generated/RouteRepositoryConfigurationInterface.md)

#### Errors

All errors have public previous field, which is either null or the previous error in the stack:

- [ConfigurationError](#)
- [RegistrationError](#)
- [TypeConversionError](#)
- [UriParameterBindingError](#)
- [UriParameterSyntaxError](#)
- [UriSyntaxError](#)
