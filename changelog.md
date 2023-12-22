# Version changes

## 2.0.0

#### Binding array get parameters

Changed behaviour of how array URI parameters are bound when `bindGetParameters` setting is used by binder.
Values are now bound as separate parameters with keys reflecting array accessors.

```js
const array = ['foo', 'bar'];
route.bindParameters({example: array}, {bindGetParameters: true}).toString()
// ?example=foo,bar
```

Old result: `'?example=foo,bar'`

New result: `'?example[0]=foo&example[1]=bar'`
