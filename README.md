XSS Polyglots
=============


A polyglot is a payload that can be used in more than one context and still be treated as valid data.
To learn more about polyglots check out [this talk](http://www.slideshare.net/MathiasKarlsson2/polyglot-payloads-in-practice-by-avlidienbrunn-at-hackpra).

Installation
------------

```
$ npm install xss-polyglots --save-dev
```

Usage
-----

The `xss-polyglots` package exports a function that returns an array of payloads.

```js
import getPayloads from 'xss-polyglots';

let xssPayloads = getPayloads();
```

By default, these payloads will call `console.error` whenever they can be executed. Otherwise you can specify which
function will be called as the first argument of the `getPayloads` function.

```js
import getPayloads from 'xss-polyglots';

let xssPayloads = getPayloads({
  fn: 'alert',
  getPayloadMessage: n => {
    return `XSSPayload${n}`;
  }
});
```

License
-------

MIT
