# steal v1.2.0

Like the `delete` keyword, except the value is returned.

```js
let steal = require('steal')

let obj = {
  foo: 1,
}

steal(obj, 'foo')         // => 1
obj.foo                   // => undefined
obj.hasOwnProperty('foo') // => false
```

- Inherited values are returned, but not deleted
- When the property equals `undefined`, the 3rd argument is returned

```js
obj.bar = undefined
steal(obj, 'bar', 2)      // => 2
obj.hasOwnProperty('bar') // => false
```
