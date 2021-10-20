route-repository / [Exports](modules.md)

# Documentation

- [Configuration](./configuration.md)
- [Registering routes](./registration.md)
- [Binding URI parameters]('./uri_parameters.md')
- [Server-side integration](./server_side_integration.md)

## Public API

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

- [Route](/generated/classes/Route.md)
- [RouteRegistrar](/generated/classes/RouteRegistrar.md)
- [RouteRepository](/generated/classes/RouteRepository.md)
- [Uri](/generated/classes/Uri.md)
- [UriParameter](/generated/classes/UriParameter.md)
- [UriParameterCollection](/generated/classes/UriParameterCollection.md)
- [QueryParameterCollection](/generated/classes/QueryParameterCollection.md)

#### Enum

Enums that are accepted by some public API methods:

- [RequestMethod](/generated/enums/RequestMethod.md)
- [UriComponent](/generated/enums/UriComponent.md)

#### Type

The enums have separate type definitions that accept string unions instead of the stricter enum type:

- [RequestMethodType](/generated/enums/RequestMethod.md)
- [UriComponentType](/generated/enums/UriComponent.md)

#### Interface

Interfaces provided as part of the public API describe user supplied objects:

- [UriInterface](/generated/interfaces/UriInterface.md)
- [RouteInterface](/generated/interfaces/RouteInterface.md)
- [RouteMiddlewareInterface](/generated/interfaces/RouteMiddlewareInterface.md)
- [RouteRegistrarConfigurationInterface](/generated/interfaces/RouteRegistrarConfigurationInterface.md)
- [RouteRepositoryConfigurationInterface](/generated/interfaces/RouteRepositoryConfigurationInterface.md)
- [UriConfigurationInterface](/generated/interfaces/UriConfigurationInterface.md)
- [UriParameterBinderConfigurationInterface](/generated/interfaces/UriParameterBinderConfigurationInterface.md)

#### Errors

All errors have public previous field, which is either null or the previous error in the stack:

- [ConfigurationError](/generated/classes/ConfigurationError.md)
- [RegistrationError](/generated/classes/RegistrationError.md)
- [TypeConversionError](/generated/classes/TypeConversionError.md)
- [UriParameterBindingError](/generated/classes/UriParameterBindingError.md)
- [UriParameterSyntaxError](/generated/classes/UriParameterSyntaxError.md)
- [UriSyntaxError](/generated/classes/UriSyntaxError.md)
