# Laravel-js-routes

A simple package for easily accessing the most common routes from javascript. Useful for dynamic js components that use ajax calls. The routes are automatically automatically generated for a given [resource](https://laravel.com/docs/5.4/controllers#resource-controllers) name, for example, photos.

Having a global helper for routes allows you to avoid blade generated properties for templates, which would not contain the correct method (verb).


# Usage
```
// Assign helpers object to window for global access.
window.R = new LaravelRoutes();

var route = R.route('photos.create');
// or
// var route = R.group('photos').route('create');

console.log('url: ' + route.url());
console.log('verb: ' + route.verb());
```


url: /photos/create

verb: GET

# Adding Custom Routes
```
// Adding routes via a route group

R.group('photos').addAll({
    upload: ['POST', 'upload'],
    publish: ['PUT/PATCH', '#/publish']
});

// Adding routes dynamically
R.addAll({
    "photos.upload" : ['POST', 'upload'],
    "photos.publish" : ['PUT/PATCH', '#/publish']
});

// Adding a single route

```

New registered routes:

| Verb      | URI                     | Action  | Route Name     |
|-----------|-------------------------|---------|----------------|
| POST      | /photos/upload          | upload  | photos.upload  |
| PUT/PATCH | /photos/{photo}/publish | publish | photos.publish |

# Listing registered routes for debugging
```
// Returns a formatted table string of all the routes.
var routeList = R.list();
console.log(routeList);
```
