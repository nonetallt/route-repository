# Front to back router

## Description

A simple front to back router package for JavaScript. Useful when your front-end has to fetch some data from the back-end APIs.

> **What this package provides**:
> * A method to register your back-end API routes so you can use them in your front-end applications.
>
> **What this package does not provide**:
> * An ajax client. You can use another package like [axios](https://github.com/axios/axios) with this package.
> * A front-end virtual DOM router like [react router](https://github.com/ReactTraining/react-router), although again, you can totally use this package with a virtual DOM router. The use cases are not overlapping but complementary.

Why?

In short, you get access to the following features and benefits:

* A layer of abstraction makes it easy to replace and reuse routes
* Reduces the headache of refactoring when urls or HTTP methods change
* No more hardcoded url strings
* Dynamically register or deregister routes
* Supports route parameter binding (for example: `/users/{id}`)
* Routes keep track of the correct HTTP method (verb), making ajax calls more dynamic
* List all registered routes for easy debugging

## Installation

As usual, you can install the package by using NPM:

```
npm install front-to-back-router
```
Or include it directly from on the public CDN providers:

```
<script src="https://jsdelivr.com/jsonp-modernized/dist/jsonp.min.js"></script>
<script src="https://unpkg.com/jsonp-modernized/dist/jsonp.min.js"></script>
```

Import the package in JavaScript:

```javascript
// Using commonjs
var FrontToBackRouter = require('front-to-back-router');

// Using es2015
import FrontToBackRouter from 'front-to-back-router´;
```

## Documentation

### Quickstart

Initialize a new router for the application:

```javascript
var router = new FrontToBackRouter();
```
Register a new route:

```javascript
// route name, HTTP method, url
router.register('user.show', 'GET', '/backend/users/{id}');

// or
router.get('user.show', '/backend/users/{id}');
```

Get the registered route:
```javascript
var route = router.route('user.index');
```

Example usage with [axios](https://github.com/axios/axios):

```javascript
var route = router.route('user.index');

// Bind the userId as url parameter, the resulting url will be /users/1
var userId = 1;

// Send a POST request
axios({
  method: route.method(),
  url: route.bindUrl(userId),
  data: {
      // Request parameters
  }
});
```


### Route Methods
Route methods are used to access the object data.

```javascript
/**
* The url with parameter placeholders.
*/
route.url();

/**
* The url with parameters bound.
*/
route.bindUrl();
route.bindUrl(parameters);

/**
* RouteParameters object used by the route.
*/
route.routeParameters();

/**
* The preferred http method verb, for example GET.
* Proxy 'method()' added in (v2.0.0+)
*/
route.verb();
route.method();

/**
* An array of all supported verbs.
*/
route.verbs();

/**
* The second half of the name if route is in a group. Same as route.name() if called on a headless route.
*/
route.action();

/**
* The full qualified name of the route.
*/
route.name();
```

### Route parameters
The UrlParameters object returned by `route.routeParameters()` contains a couple of useful methods.

```javascript
/**
* An array of all the required parameter names.
*/
params.required();

/**
* Check wether the route requires any parameters or not.
*/
params.areRequired();

/**
* Directly check if a given variable can be bound to the route parameters.
*/
params.canBind(object);
```


### Binding route parameters
Parameters are bound when calling the `route.bindUrl()` method. Obviously, if the route has no url parameters, you don't have to give `bindUrl()` any parameters or can simply use `url()`. The method accepts one of the following types as a parameter:

1. a **plain value** that can be interpreted as a string (string, number etc)
2. an **array** of plain values
3. an **object** with keys matching plain values


---
When using a single parameter, the first method is often desirable.
```javascript
var route = r.add('GET', 'example/{parameter}', 'test');
var url = route.bindUrl(1);
// url = example/1
```
---
When multiple parameters are required, arrays can be used to bind the values in the same order as in the given array.
```javascript
var route = r.add('GET', 'example/{p1}/{p2}/{p3}', 'test');
var url = route.bindUrl([1,2,3]);
// url = example/1/2/3
```
---
For most fine grained control and making sure that every parameter matches as intended by the user, using a keyed object is the method of choice.
```javascript
var route = r.add('GET', 'example/{fruit}/{vegetable}/{meat}', 'test');
var url = route.bindUrl({
    meat: 'beef',
    fruit: 'orange',
    vegetable: 'cucumber'
});
// url = example/orange/cucumber/beef
```



### Get Parameter Binding (v2.0.0+)
You can now bind regular get parameters to the url string when using object type binding (see section above). The binding is applied automatically to GET routes.
```javascript
var route = r.add('GET', 'example');
var url = route.bindUrl({
    foo: 1,
    bar: 2
});
// url = example?foo=1&bar=2
```
Note that when binding parameters, the route parameters of a given route are given priority over GET parameters.
```javascript
var route = r.add('GET', 'example/{foo}');
var url = route.bindUrl({
    foo: 1,
    bar: 2
});
// url = example/1?bar=2
```


### Settings

| Setting name          | Type    | Default | Status | Explanation                                                                                                         |
|-----------------------|---------|---------|--------|---------------------------------------------------------------------------------------------------------------------|
| registration.strict   | boolean | false   | 2.1.0  | Throw errors when using Laravel style registration and name of the new route is not explicitly defined.             |
| registration.explicit | boolean | false   | n/a    | Disable automatic resource routes.                                                                                  |
| logging.warnings      | boolean | true    | 2.1.0  | Show warnings in console when using Laravel style registration and name of the new route is not explicitly defined. |
| logging.suggestions   | boolean | true    | n/a    | Show tips and debugging suggestions in longer error messages.                                                       |                                     |


### Custom Routes

The $ sign can be used as a placeholder in the route uri when adding routes to a group. Url parameters can be created using the same curly bracket syntax as in laravel. The text inside brackets will be used as a parameter name so avoid using duplicate parameter names if you want the binding to work correctly with objects.

Adding multiple routes.

```javascript
r.group('photos').addAll({
    upload: ['POST', '$/upload'],
    publish: ['PUT/PATCH', '$/{photo}/publish']
});
// or
r.addAll({
    "photos.upload" : ['POST', '$/upload'],
    "photos.publish" : ['PUT/PATCH', '$/{photo}/publish']
});
```

Adding a single route.
```javascript
r.add(verb, uri, action, groupName);
// or
r.group('photos').add(verb, uri, action);
```

| Verb      | URI                     | Action  | Route Name     |
|-----------|-------------------------|---------|----------------|
| POST      | /photos/upload          | upload  | photos.upload  |
| PUT/PATCH | /photos/{photo}/publish | publish | photos.publish |

### Debugging

You can use the `list()` method to print a formatted markdown table containing all routes:

```javascript
var routeListString = r.list();

// For debugging
console.log(routeListString);
```
The `list()` method relies on the [markdown-table](https://www.npmjs.com/package/markdown-table) package, which is listed as an optional dependency. This means that the feature isn't enabled if you installed this package with `npm install --no-optional` command.

## Publishing routes

### Route publishers

You can use various back-end libraries to automatically generate a list of your back-end API routes:

| Language    | Framework                                     | Package                                                                                     | Support          |
| ----------- | -------------------------                     | ---------                                                                                   | ---------------- |
| PHP         | [Laravel](https://github.com/laravel/laravel) | [nonetallt/laravel-route-publisher](https://github.com/nonetallt/laravel-js-routes-publish) | official         |
| PHP         | [Hyperf](https://github.com/hyperf/hyperf)    | [nonetallt/hyperf-route-publisher]()                                                        | official         |

### Creating a route publisher

Implementing a route publisher for your favorite framework is fairly simple. All you need to do is find a way to access the list of registered routes and generate a javascript file that registers all the routes you wish to publish using this package.

The package should provide the following functionality:

1) A console command that generates a `routes.js` file (preferably with a configurable path)
2) Optionally provide options to filter which routes to publish. For example, the user should be able to publish only the routes in a prefix group "backend".

### Auto-publish using a task runner

For an optimized workflow experience, it's recommended to use a task runner integrated with a file watcher that can publish the new routes as soon as you change them. Here's an example `gulpfile.js` configuration to achieve this with [gulp.js](https://gulpjs.com/):

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
