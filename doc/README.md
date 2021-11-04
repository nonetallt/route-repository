# Documentation

- [Configuration](configuration.md)
- [Registering routes](registration.md)
- [Binding URI parameters](uri-parameters.md)
- [Server-side integration](server-side-integration.md)
- [Public API](generated/modules.md)

## Versioning

This package uses [semantic versioning](https://semver.org/), meaning that you should use the caret (`^`) range version when including this package.

Example in `package.json`:

```json
{
    "require": {
        "route-repository": "^1.0.0"
    }
}
```

## Design notes

#### Immutability

Note that with the exception of [RouteRepository](generated/RouteRepository.md) when [configuration.mutable](configuration.md#mutable) is set as `true`, all objects are ment as read-only. This is by design and is intended to provide pure functionality by minimizing state changing side effects which tend to cause unexpected bugs.

#### Errors

All errors have a public previous field, which is either null or the previous error in the stack.

## Terminology

#### Server-side & back-end

Used as synonyms in the documentation, both refer to code executed on a remote server device.

#### Client-side & front-end

Used as synonyms in the documentation, both refer to javascript running on the client's device.

#### URI vs URL

There's a large swamp of blogs and articles describing the differences between the two. Most agree that the two terms are somewhat ill-defined by the relevant RFC. Some sources hold the opinion that modern systems should always use URL as the preferred term since it's generally more widely understood. However, it's also a fact that URL is a subset falling under the URI definition. URIs contain URLs and don't have to contain location descriptors.

This package uses the term URI since it encompasses absolute locations like (https://example.com) as well as relative locations like [/relative](/relative) while URL could technically only describe absolute locations. This limitation of URL is also [apparent in the javascript URL implementation](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) - it's not possible to create a "relative URL" (which is somewhat of an oxymoron term).

#### Query parameter vs GET parameter vs URI parameter vs route parameter

Query parameter is a parameter defined in the query part of an URI. In the URI `https://example.com?foo=bar`, `foo` is the name of the first query parameter and it's value is `bar`.

Query parameters are also GET parameters.

URI parameters are parts of the URI path containing semantic data. In the URI `https://example.com/users/{id}` the placeholder `{id}` describes the name of the URI parameter, while it's value is the string used to replace the placeholder.

Route parameters are another name for URI parameters.
