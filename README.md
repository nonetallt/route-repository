# route-repository

A simple front to back router package for JavaScript. Useful when your front-end has to send request to back-end APIs.

> **What this package provides**:
> * A javascript way of storing and accessing your route aliases, URIs and their associated HTTP methods.
>
> **What this package does not provide**:
> * An ajax client. You can use another package like [axios](https://github.com/axios/axios) with this package.
> * A front-end virtual DOM router like [react router](https://github.com/ReactTraining/react-router), although again, you can totally use this package with a virtual DOM router. The use cases are not overlapping but complementary.

## Why?

In short, you get access to the following features and benefits:

* A layer of abstraction makes it easy to replace and reuse routes
* Reduces the headache of refactoring when URIs or HTTP methods change
* No more hardcoded URI strings
* Dynamically register routes
* Supports URI parameter binding (for example: `/users/{id}`)
* Routes keep track of the correct HTTP method (verb), making ajax calls more dynamic
* List all registered routes for easy debugging
* You can easily swap the base URIs of your entire application, which makes development and using proxies very convenient. Simply enable cross-origin request and point the base URI of your application to a mock backend

## Installation

#### NPM

Install package:

```
npm install route-repository
```

Import the main class:

```javascript
import { RouteRepository } from 'route-repository';
var repository = new RouteRepository();
```

#### Browser

Include directly from one of the public CDN providers:

```html
<script src="https://jsdelivr.com/route-repository/dist/route-repository.min.js"></script>
<script src="https://unpkg.com/-modernized/dist/route-repository.min.js"></script>
```

Use the `route_repository` window object to access classes under the package namespace:

```javascript
const library = route_repository
var repository = new library.RouteRepository()
```

## Basic usage

Register a new route:

```javascript
// route name, HTTP method, uri
repository.register('user.show', 'GET', '/backend/users/{id}');

// or
repository.get('user.show', '/backend/users/{id}');
```

Get the registered route:
```javascript
var route = repository.getRoute('user.index');
```

Example usage with [axios](https://github.com/axios/axios):

```javascript
repository.registerAll([{
    name: 'user.show',
    method: 'GET',
    uri: '/backend/users/{id}'
}]);

var route = repository.getRoute('user.index');

// Bind the userId as uri parameter, the resulting uri will be /backend/users/1
var userId = 1;

// Send the request
axios({
  method: route.method(),
  url: route.uri.bindParameters(userId)
});
```
## Documentation

Check out the [documentation](/doc/README.md) for all methods and public API provided by this package.

It is also highly recommended to take a look at the [server side integration](/doc/server-side-integration.md) to understand the optimal workflow and how to get the most out of using this package.
