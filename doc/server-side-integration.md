# Server-side integration

Sharing back-end routes to front-end javascript is the key to effectively utilizing this package. This is achieved by having a back-end server command that exports the relevant routes into a **json file** that can then be imported by the [RouteRepository](./RouteRepository.md).

## Importing routes from the back-end

You can use the **registerAll** method to quickly register all routes from a file.

```javascript
var json = require('./path/to/routes.json')

var repository = new RouteRepository()
repository.registerAll(json)
```

Note that if you're using typescript, you will unfortunately have to typecast imported json data:

```typescript
var json = require('./path/to/routes.json')

const repo = new RouteRepository()
const data = json as Array<RouteInterface>
repo.registerAll(data)
```
This means that you'll have to be careful that you don't supply data that is divergent from the schema, as the type checks won't be of much help. This shouldn't be much of an issue however, as long as the server-side publisher package is working correctly. This happens because the union type for route methods is typed as string by the json import instead of the correct union type, causing the two type declarations to clash.

See the relevant issues on github:
- [Typescript: 26552](https://github.com/microsoft/TypeScript/issues/26552)
- [Typescript: 32063](https://github.com/microsoft/TypeScript/issues/32063)

## Route file json schema

 An example routes.json file:

```json
[
    {
        "name": "foo",
        "method": "GET",
        "uri": "http://example.com/foo"
    },
    {
        "name": "bar",
        "method": "POST",
        "uri": {
            "scheme": "http",
            "host": "example.com",
            "path": "bar"
        }
    },
    {
        "name": "baz",
        "method": "PUT",
        "uri": {
            "scheme": "http",
            "host": "example.com",
            "path": "baz"
        },
        "extra": {
            "foo": "bar"
        }
    }
]
```

#### name

Alias for the route.

#### method

Http method (verb) to access the route.

#### uri

Uri of the route. Can be either a string or an object with any of the following optional properties (it is required that you specify at least either **host** or **path** for each uri object):

- scheme
- userinfo
- host
- port
- path
- query
- fragment

See the [wikipedia article](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax) for more details about each component.

#### extra

Any additional properties you wish to include in your routes can be stored into the extra object.


## Existing integrations

Check out the existing server-side integration packages:

| Language | Framework                       | Package                        |
|----------|---------------------------------|--------------------------------|
| PHP      | [Laravel](https://laravel.com/) | [laravel-publish-js-routes](#) |
| PHP      | [Hyperf](https://hyperf.wiki)   | [hyperf-publish-js-routes](#)  |

Feel free to suggest your own package to be added to this list.

## Creating server-side integrations

If you wish to create your own integration, simply use the CLI of your technology of choice to look through the registered server-side routes and output them into a json file according to the schema provided above.

Please note that saving the uris in the object format instead of as strings increases performance as there will be no need to parse the string and it's uri components. However, this results in less human-readable output, so consider giving the user of your package the option to choose between the two export formats:

#### uri strings = readability

```json
[
    {
        "name": "foo",
        "method": "GET",
        "uri": "http://example.com/foo"
    }
]
```
#### uri objects = performance

```json
[
    {
        "name": "foo",
        "method": "GET",
        "uri": {
            "scheme": "http",
            "host": "example.com",
            "path": "foo"
        }
    }
]
```
