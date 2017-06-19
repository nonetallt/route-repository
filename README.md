# laravel-js-helpers

# Usage
```
// Assign helpers object to window for global access.
window.H = new LaravelHelpers();

let route = H.route('photos.create');
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
    publish: ['PUT/PATCH', 'publish/#']
}
```

Registered routes:

| Verb      | URI             | Action  | Route Name     |
|-----------|-----------------|---------|----------------|
| POST      | /photos/upload  | upload  | photos.upload  |
| PUT/PATCH | /photos/publish | publish | photos.publish |
