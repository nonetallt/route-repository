[Back to documentation index](README.md)

# URI parameters

URI parameters, also called route parameters, are the sections of a given URI that contain semantic information, usually in the path component of the URI. They are used by some frameworks like [Laravel](https://laravel.com/) to pass information to the back-end. Therefore, it's a given that a package ment for front-to-back communication should also support URI parameters.



## Defining URI parameters

When registering routes, a given URI can define a URI parameter placeholder with a curly brackets `{}` syntax:

```javascript
repository.get('user.show', '/users/{userId}')
```

A given route can contain as many URI parameters as you want:

```javascript
repository.get('example', '/{foo}/{bar}/{baz}')
```

You can make any number of  URI parameters optional by adding a `?` character at the end of the placeholder name:

```javascript
repository.get('user.index', '/users/{filter?}')
```

Note that if you mix both required and optional URI parameters, the **optional parameters must be defined last**:

```javascript
// throws UriParameterSyntaxError
repository.get('example', '/{foo}/{bar?}/{baz}')

// OK!
repository.get('example', '/{foo}/{bar?}/{baz?}')
```



## Binding URI parameters

Binding parameters refers to the act of replacing the URI parameter `{placeholders}` from a given URI string. Simply casting a given URI to string will not remove the placeholders. You must explicitly call the [bindParameters](generated/classes/Uri.md#bindParameters) method.

Note that any non-string values will be converted to strings using the [typeConversionFunction](configuration.md#typeConversionFunction) configuration option and bindParameters will throw a [UriParameterBindingError](generated/classes/UriParameterBindingError.md) if the type conversion fails. This error is also thrown if any **required** parameters are missing.

When the URI has only  a single parameter, a given non-object, non-string value can be used directly.
```javascript
repository.get('example', '/example/{parameter}')
repository.getRoute('example').uri.bindParameters(1)
// /example/1
```
When multiple parameters are required, arrays can be used to bind the values in the same order as in the given array.
```javascript
repository.get('example', '/example/{p1}/{p2}/{p3}');
repository.getRoute('example').uri.bindParameters([1,2,3])
// /example/1/2/3
```
For the most fine grained control and making sure that every parameter value matches the correct parameter name, using an object is the method of choice.
```javascript
repository.get('example', '/example/{fruit}/{vegetable}/{meat}');

repository.getRoute('example').uri.bindParameters({
    meat: 'beef',
    fruit: 'orange',
    vegetable: 'cucumber'
});
// /example/orange/cucumber/beef
```

When binding optional parameters with missing values, any trailing slashes will be automatically removed:

```javascript
repository.get('example', '/example/{fruit}/{vegetable?}/{meat?}');

repository.getRoute('example').uri.bindParameters({
    fruit: 'orange'
});
// /example/orange
```


## Configuration

The bindParameters method also accepts a [configuration](generated/interfaces/UriParameterBinderConfigurationInterface.md) object as the 2nd argument:

```javascript
var config = {
    trailingSlashes: true
}

repository.get('example', '/example/{fruit}/{vegetable?}/{meat?}');

repository.getRoute('example').uri.bindParameters({
    fruit: 'orange'
}, config);
// /example/orange//
```

The supplied configuration overrides the configuration set by the registration process. See the [configuration documentation](configuration.md#UriParameterBinderConfiguration) for more details about the available configuration options.

## Get parameter binding

You can also bind regular get parameters to the URI string when using object type binding (see section above). You must set the [bindGetParameters](configuration.md#bindGetParameters) configuration option as `true` to enable this feature.

```javascript
repository.get('example', '/example');

repository.getRoute('example').uri.bindParameters({
    foo: 1,
    bar: 2
}, {bindGetParameters: true});
// url = /example?foo=1&bar=2
```

Note that when binding parameters, the route parameters of a given route are given priority over GET parameters.

```javascript
repository.get('example', '/example/{foo}');

repository.getRoute('example').uri.bindParameters({
    foo: 1,
    bar: 2
}, {bindGetParameters: true});
// url = /example/1?bar=2
```
