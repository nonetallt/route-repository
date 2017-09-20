# laravel-js-routes 

A simple front to back router package for JavaScript. Useful for users of dynamic JavaScript frameworks like Vue.js or React who are using ajax calls. The routes can be added manually or generated automatically for a given [resource](https://laravel.com/docs/5.4/controllers#resource-controllers) (e.g. photos).

Features and benefits:
* less props for components
* easy to replace and reuse routes
* list all routes for easy debugging
* no hardcoded url strings in components
* dynamically add or remove custom routes
* no messy string parsing for url parameters
* routes contain the correct method (verb), making ajax calls more dynamic

# Installation
Using npm.
```
npm install laravel-js-routes
```

Import the package in JavaScript.
```
// Using commonjs
var LaravelRoutes = require('laravel-js-routes');

// Using es2015
import LaravelRoutes from 'laravel-js-routes';
```

# Basic Usage

Create a new routes object for the application.
```
var r = new LaravelRoutes();
```

Access a "create" resource route for the group photos.
```
var route = r.route('photos.create');
// or
var route = r.group('photos').route('create');
```

Return a formatted table string of all the routes.
```
var routeListString = r.list();

// For debugging
console.log(routeListString);
```

# Route Methods
Route methods are used to access the object data.

```
/**
* The link with parameters bound.
*/
route.url();
route.url(parameters);

/**
* The link with parameter placeholders.
*/
route.uri();

/**
* UrlParams object used by the route.
*/
route.urlParameters();

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

# Url Parameters
The UrlParams object returned by route.urlParameters() contains a couple of useful methods.

```
/**
* An array of all the required parameter names.
*/
params.required();

/**
* Check wether the route requires any parameters or not.
*/
params.areRequired();

/**
* Directly check if a given parameters object contains the keys required by the route.
*/
params.objectHasRequiredKeys(object);
```


# Binding Url Parameters
Parameters are bound when calling the route.url() method. Obviously, if the route has no url parameters, you don't have to give .url() any parameters. The method accepts one of the following types as a parameter:

1. a **plain value** that can be interpreted as a string (string, number etc)
2. an **array** of plain values
3. an **object** with keys matching plain values


---
When using a single parameter, the first method is often desirable.
```
var route = r.add('GET', 'example/{parameter}', 'test');
var url = route.url(1);
// url = example/1
```
---
When multiple parameters are required, arrays can be used to bind the values in the same order as in the given array. 
```
var route = r.add('GET', 'example/{p1}/{p2}/{p3}', 'test');
var url = route.url([1,2,3]);
// url = example/1/2/3
```
---
For most fine grained control and making sure that every parameter matches as intended by the user, using a keyed object is the method of choice.
```
var route = r.add('GET', 'example/{fruit}/{vegetable}/{meat}', 'test');
var url = route.url({
    meat: 'beef',
    fruit: 'orange',
    vegetable: 'cucumber'
});
// url = example/orange/cucumber/beef
```



# Get Parameter Binding (v2.0.0+)
You can now bind regular get parameters to the url string when using the object type binding (see the section above). The binding is applied automatically to GET routes. 
```
var route = r.add('GET', 'example');
var url = route.url({
    foo: 1,
    bar: 2
});
// url = example?foo=1&bar=2
```
Note that when binding parameters, the route parameters of a given route are given priority over GET parameters.
```
var route = r.add('GET', 'example/{foo}');
var url = route.url({
    foo: 1,
    bar: 2
});
// url = example/1?bar=2
```


# Custom Routes
The $ sign can be used as a placeholder in the route uri when adding routes to a group. Url parameters can be created using the same curly bracket syntax as in laravel. The text inside brackets will be used as a parameter name so avoid using duplicate parameter names if you want the binding to work correctly with objects.

Adding multiple routes.
```
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
```
r.add(verb, uri, action, groupName);
// or
r.group('photos').add(verb, uri, action);
```

| Verb      | URI                     | Action  | Route Name     |
|-----------|-------------------------|---------|----------------|
| POST      | /photos/upload          | upload  | photos.upload  |
| PUT/PATCH | /photos/{photo}/publish | publish | photos.publish |
