### Debugging

You can use the `list()` method to print a formatted markdown table containing all routes:

```javascript
var routeListString = r.list();

// For debugging
console.log(routeListString);
```
The `list()` method relies on the [markdown-table](https://www.npmjs.com/package/markdown-table) package, which is listed as an optional dependency. This means that the feature isn't enabled if you installed this package with `npm install --no-optional` command.
