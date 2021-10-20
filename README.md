# Front to back router

A simple front to back router package for JavaScript. Useful when your front-end has to fetch some data from the back-end APIs.

> **What this package provides**:
> * A javascript way of storing and accessing your route aliases, URIs and their associated HTTP methods.
>
> **What this package does not provide**:
> * An ajax client. You can use another package like [axios](https://github.com/axios/axios) with this package.
> * A front-end virtual DOM router like [react router](https://github.com/ReactTraining/react-router), although again, you can totally use this package with a virtual DOM router. The use cases are not overlapping but complementary.

## Why?

In short, you get access to the following features and benefits:

* A layer of abstraction makes it easy to replace and reuse routes
* Reduces the headache of refactoring when uris or HTTP methods change
* No more hardcoded URI strings
* Dynamically register or deregister routes
* Supports URI parameter binding (for example: `/users/{id}`)
* Routes keep track of the correct HTTP method (verb), making ajax calls more dynamic
* List all registered routes for easy debugging

## Installation

As usual, you can install the package by using NPM:

```
npm install route-repository
```
Or include it directly from one the public CDN providers:

```
<script src="https://jsdelivr.com/route-repository/dist/route-repository.min.js"></script>
<script src="https://unpkg.com/-modernized/dist/route-repository.min.js"></script>
```

Import the package:

```javascript
// Using commonjs
var repository = require('route-repository').RouteRepository;

// Using es2015
import {RouteRepository} from 'route-repository';
```

## Quickstart

Initialize a new container of the routes for the application:

```javascript
var repository = new RouteRepository();
```
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

var route = routes.getRoute('user.index');

// Bind the userId as uri parameter, the resulting uri will be /backend/users/1
var userId = 1;

// Send the request
axios({
  method: route.method(),
  url: route.uri.bindParameters(userId)
});
```
## Documentation

Check out the [documentation](/doc/index.md) for all methods and public API provided by this package.

It is also highly recommended to take a look at the [server side integration](/doc/server_side_integration.md) to understand the optimal workflow and how to get the most out of using this package.
