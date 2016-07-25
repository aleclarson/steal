
# steal v1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

```CoffeeScript
steal = require "steal"

obj = { value: 1 }

obj.value                       # => 1

steal obj, "value"              # => 1

obj.value                       # => undefined
```

If the `obj[key] === undefined`, the third argument is used as the default value.

```CoffeeScript
steal obj, "noValue"            # => undefined

steal obj, "noValue", 1         # => 1
```

It's basically `delete obj[key]`, but `obj[key]` is returned instead of a `Boolean`.

&nbsp;

## install

```sh
npm install aleclarson/steal#1.0.0
```

&nbsp;
