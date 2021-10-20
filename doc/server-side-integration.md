# Server-side integration

Sharing back-end routes to front-end javascript is the key to effectively utilizing this package. This is achieved by having a back-end server command that exports (publishes) the relevant routes into a **json file** that can then be imported by the [RouteRepository](./RouteRepository.md). The widely supported json serialization format works as the bridge that allows communication between javascript and your back-end language of choice.

## Export routes from the back-end

Check out the existing server-side integration packages:

| Language | Framework                       | Package                                                                       | Command                             |
|----------|---------------------------------|-------------------------------------------------------------------------------|-------------------------------------|
| PHP      | [Laravel](https://laravel.com/) | [laravel-publish-routes](https://github.com/nonetallt/laravel-publish-routes) | `php artisan routes:publish`        |
| PHP      | [Hyperf](https://hyperf.wiki)   | [hyperf-publish-routes](https://github.com/nonetallt/hyperf-publish-routes)   | `php bin/hyperf.php routes:publish` |

Feel free to suggest [your own package](#creating-server-side-integrations) to be added to this list.

#### Auto-publish routes with a task runner

For an optimized workflow experience, it's recommended to use a task runner integrated with a file watcher that can publish the new server-side routes as soon as you change them. Here's an example `gulpfile.js` configuration to achieve this with [gulp.js](https://gulpjs.com/):

```javascript
var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('publish-routes', function (cb) {
    exec('my-publish-command-here', function(err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})

gulp.task('watch-routes', function() {
    gulp.watch([ 'routes/*.php'  ], ['publish-routes']);
})
```

#### Creating server-side integrations

If you wish to create your own integration, simply create a command that looks through the registered server-side routes and output them into a json file according to the [schema](#route-json-schema).

The package should provide the following functionality:

1) A console command that generates a json file (preferably with a configurable path)
2) Optionally provide options to filter which routes to publish. For example, the user should be able to publish only the routes in a prefix group "backend".
3) Please note that saving the URIs in the object format instead of as strings increases performance as there will be no need to parse the string and it's URI components. However, this results in less human-readable output, so consider giving the user of your package the option to choose between the two export formats:

#### URI strings = readability

```json
[
    {
        "name": "foo",
        "method": "GET",
        "uri": "http://example.com/foo"
    }
]
```
#### URI objects = performance

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

## Importing routes to the front-end

You can use the **registerAll** method to quickly register all routes from a file.

```javascript
var json = require('./path/to/routes.json')

var repository = new RouteRepository()
repository.registerAll(json)
```

Note that if you're using typescript, you will unfortunately have to typecast imported json data:

```typescript
var json = require('./path/to/routes.json')
var RouteInterface = require('route-repository').RouteInterface

const repo = new RouteRepository()
const data = json as Array<RouteInterface>
repo.registerAll(data)
```
This means that you'll have to be careful that you don't supply data that is divergent from the schema, as the type checks won't be of much help. This shouldn't be much of an issue however, as long as the server-side publisher package is working correctly. This happens because the union type for route methods is typed as string by the json import instead of the correct union type, causing the two type declarations to clash.

See the relevant issues on github:
- [Typescript: 26552](https://github.com/microsoft/TypeScript/issues/26552)
- [Typescript: 32063](https://github.com/microsoft/TypeScript/issues/32063)


## Route json schema

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

URI of the route. Can be either a string or an object with any of the following optional properties (it is required that you specify at least either **host** or **path** for each URI object):

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
