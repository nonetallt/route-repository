# Laravel-js-routes

A simple package for easily accessing the most common routes from javascript. Useful for dynamic js components that use ajax calls. The routes are automatically automatically generated for a given [resource](https://laravel.com/docs/5.4/controllers#resource-controllers) name, for example, photos.

Having a global helper for routes allows you to avoid blade generated properties for templates, which would not contain the correct method (verb).


# Usage

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

Accessing route data.
```
// Parameters are bound using either keys in an object or in order from an array.
route.url(parameters);
route.uri();
route.urlParameters();
route.verb();
route.verbs();
route.action();
route.name();
```

Return a formatted table string of all the routes.
```
r.list();
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
