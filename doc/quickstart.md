# Quickstart

Initialize a new container of the routes for the application:

```javascript
var routes = new RouteRepository();
```
Register a new route:

```javascript
// route name, HTTP method, uri
routes.register('user.show', 'GET', '/backend/users/{id}');

// or
routes.get('user.show', '/backend/users/{id}');
```

Get the registered route:
```javascript
var route = routes.getRoute('user.index');
```

Example usage with [axios](https://github.com/axios/axios):

```javascript
var routes = RouteRepository.load([{
    name: 'user.show',
    method: 'GET',
    uri: '/backend/users/{id}'
}]);

var route = routes.getRoute('user.index');

// Bind the userId as uri parameter, the resulting uri will be /backend/users/1
var userId = 1;

// Send a POST request
axios({
  method: route.method(),
  url: route.uri.bindParameters(userId),
  data: {
      // Request parameters
  }
});
```
