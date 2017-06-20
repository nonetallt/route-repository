# Laravel-js-helpers

A simple package for easily accessing the most common routes from javascript. Useful for dynamic js components that use ajax calls. The routes are automatically automatically generated for a given [resource](https://laravel.com/docs/5.4/controllers#resource-controllers) name, for example, photos.

Having a global helper for routes allows you to avoid blade generated properties for templates, which would not contain the correct method (verb).


# Usage
```
// Assign helpers object to window for global access.
window.H = new LaravelHelpers();

var route = H.route('photos.create');
// or
// var route = H.controller('photos').action('create');

console.log('url: ' + route.url());
console.log('verb: ' + route.verb);
```

Output:

url: /photos/create

verb: GET

# Adding Custom Routes
```
window.H = new LaravelHelpers();

H.registerRoutes('photos', {
    upload: ['POST', 'upload'],
    publish: ['PUT/PATCH', '#/publish']
});
```

New registered routes:

| Verb      | URI                     | Action  | Route Name     |
|-----------|-------------------------|---------|----------------|
| POST      | /photos/upload          | upload  | photos.upload  |
| PUT/PATCH | /photos/{photo}/publish | publish | photos.publish |
