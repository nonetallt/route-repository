# Configuration

## Hierarchy

```
RouteRepositoryConfiguration/
├── mutable
├── duplicates
└── registration/
    └── RouteRegistrarConfiguration/
        ├── extra
        └── urls/
            └── UrlConfiguration/
                ├── prependSlash
                ├── removeLeadingSlashes
                ├── removeTrailingSlashes
                ├── baseUrl
                └── parameters/
                    └── UrlParameterConfiguration/
                        ├── typeConversionFunction
                        ├── encodeUrlParameters
                        ├── encodeGetParameters
                        └── acceptWhitespace
```

## RouteRepositoryConfiguration

Configuration of the repository object storing route information.

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

## UrlConfiguration

Configuration of an url. Applies to all urls of the given registrar.

#### prependSlash

- Type: boolean
- Default: `true`

Whether the url should be preceded by a leading `/` character. This determines if the url will be considered as relative or absolute when it does not begin with a protocol (either `http://` or `https://`).

#### removeTrailingSlashes

- Type: boolean
- Default: `true`

Whether trailing slashes should be removed from the url. This might be relevant in cases where the url has multiple optional trailing parameters that can be left empty.

#### baseUrl

- Type: string
- Default: `''`

## UrlParameterConfiguration

Configuration of url parameters. Applies to all parameters of a given url.
