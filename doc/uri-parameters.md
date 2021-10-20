# URI parameters

## Binding URI parameters
Parameters are bound when calling the `route.bindUrl()` method. Obviously, if the route has no url parameters, you don't have to give `bindUrl()` any parameters or can simply use `url()`. The method accepts one of the following types as a parameter:

1. a **plain value** that can be interpreted as a string (string, number etc)
2. an **array** of plain values
3. an **object** with keys matching plain values


When using a single parameter, the first method is often desirable.
```javascript
var route = r.add('GET', 'example/{parameter}', 'test');
var url = route.bindUrl(1);
// url = example/1
```
When multiple parameters are required, arrays can be used to bind the values in the same order as in the given array.
```javascript
var route = r.add('GET', 'example/{p1}/{p2}/{p3}', 'test');
var url = route.bindUrl([1,2,3]);
// url = example/1/2/3
```
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
## Get parameter binding

You can also bind regular get parameters to the url string when using object type binding (see section above). The binding is applied automatically to GET routes.

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
