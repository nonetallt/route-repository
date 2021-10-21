# Registering routes

Check out [RouteRegistrar documentation](generated/classes/RouteRegistrar.md) for all registration methods.

## Registering a single route

You can use the [register](generated/classes/RouteRegistrar.md#register) method to register a single route with a given method.

```javascript
// Register a route with dynamic HTTP method
repository.register('user.index', 'GET', '/users')

// Register a route with a basic HTTP method (same result as the method above)
repository.get('user.index', '/users')

// post, put, patch, delete...
```

The last argument of registration methods accepts an extra `{}` object that can contain any additional data you wish to store in that route.

```javascript
repository.register('user.index', 'GET', '/users', {myData: 'foo'})

repository.getRoute('user.index').extra.myData
// foo
```

## Registering multiple routes

You can use the [registerAll](generated/classes/RouteRegistrar.md#registerall) method to quickly register multiple routes. This method accepts either a json string or an array of [RouteInterface](generated/interfaces/RouteInterface.md). Not that the supplied data should always conform to the [schema](server-side-integration#route-json-schema).

```javascript
var json = require('./path/to/routes.json')

var repository = new RouteRepository()
repository.registerAll(json)
```

Note that if you're using typescript, you will unfortunately have to typecast imported json data:

```javascript
var json = require('./path/to/routes.json')

const repo = new RouteRepository()
const data = json as Array<RouteInterface>
repo.registerAll(data)
```
This means that you'll have to be careful that you don't supply data that is divergent from the schema, as the type checks won't be of much help. This shouldn't be much of an issue however, as long as the server-side publisher package is working correctly. This happens because the union type for route methods is typed as string by the json import instead of the correct union type, causing the two type declarations to clash.

See the relevant issues on github:
- [Typescript: 26552](https://github.com/microsoft/TypeScript/issues/26552)
- [Typescript: 32063](https://github.com/microsoft/TypeScript/issues/32063)


## Registering routes as groups

You can call the group method to register a group of routes with different configuration compared to the main repository. This is mostly useful when the specific group has either a different [baseUri](configuration#baseuri) or [extra](configuration#extra) settings. The 2nd argument callback takes an argument in the form of a [RouteRegistrar](generated/classes/RouteRegistrar.md), which has access to most of the same methods as the [RouteRepository](generated/classes/RouteRepository.md).

```javascript
var config = {
    uris: {
        baseUri: '/api',
    },
    registrationMiddleware: [
        { applyMiddleware: route => route.withName('api.' + route.name) }
    ]
}

// Store api routes
repository.group(config, (registrar) => {
    registrar.get('user.index', '/users')
    registrar.get('user.show', '/users/{id}')
    registrar.post('user.store', '/users')
})

repository.listRoutes()
/**
| NAME           | METHOD | URI             |
| -------------- | ------ | --------------- |
| api.user.index | GET    | /api/users      |
| api.user.show  | GET    | /api/users/{id} |
| api.user.store | POST   | /api/users      |
*/
```
