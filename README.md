<div align="center">
  <img src="https://github.com/janghye0k/doumi/blob/main/packages/doumi/logo.png"></img>
</div>

[![NPM Version](https://img.shields.io/npm/v/doumi.svg?style=flat)]()
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/janghye0k/doumi/blob/main/packages/doumi/LICENSE)
[![Test Status](https://img.shields.io/github/actions/workflow/status/janghye0k/doumi/test.yml?branch=main&style=flat&label=test)](https://github.com/janghye0k/doumi/actions?query=workflow%Test)

# doumi

The [Doumi](https://janghye0k.github.io/doumi/) is a utility library for JavaScript that provides support for the usual functional suspects (forEach, on, debounce, isEqual...)

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
  </head>
  <body></body>
  <script src="doumi.js"></script>
  <script>
    doumi.isArray([]); // true
  </script>
</html>
```

See the [package source](https://github.com/janghye0k/doumi/tree/main/packages/doumi) for more details.
