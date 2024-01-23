# doumi

The Doumi is a utility library for JavaScript that provides support for the usual functional suspects (forEach, on, debounce, isEqual...)

## Installation

```shell
npm install doumi
```

In Node.js:

```js
var doumi = require('doumi');

doumi.isArray([]); // true
```

In ESM:

```js
import { isArray } from 'doumi';

doumi.isArray([]); // true
```

in Browser:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="doumi.js"></script>
    <script>
      doumi.isArray([]); // true
    </script>
  </head>
  <body></body>
</html>
```

See the [package source](https://github.com/janghye0k/doumi) for more details.
