# nsstr

[![npm][9]][7] [![mit][2]][1]  [![install size][6]][5]

**Parse and stringify an `nsstr`.** This library is gani-specific and probably not useful elsewhere.

``` javascript
nsstr.parse('[/dataerrors].subj.childremoved')
// { fullstr: '[/dataerrors].subj.childremoved',
//   nsstr: 'subj.childremoved',
//   nskey: 'subj',
//   nsprop: 'childremoved',
//   fnsstr: '/dataerrors',
//   fnspath: '/dataerrors',
//   fnskey: undefined,
//   fnsprop: undefined }

nsstr.parse('[fkey.shapedata].subj.geometry');
// { fullstr: '[fkey.shapedata].subj.geometry',
//   nsstr: 'subj.geometry',
//   nskey: 'subj',
//   nsprop: 'geometry',
//   fnsstr: 'fkey.shapedata',
//   fnspath: undefined,
//   fnskey: 'fkey',
//   fnsprop: 'shapedata' }

nsstr.parse('pkg.start');
// { fullstr: 'pkg.start',
//   nsstr: 'pkg.start',
//   nskey: 'pkg',
//   nsprop: 'start',
//   fnsstr: undefined,
//   fnspath: undefined,
//   fnskey: undefined,
//   fnsprop: undefined }
```


[9]: https://img.shields.io/npm/v/nsstr
[7]: https://www.npmjs.com/package/nsstr
[1]: https://mit-license.org/ "MIT License"
[2]: https://img.shields.io/badge/license-MIT-blue.svg "MIT"
[5]: https://packagephobia.now.sh/result?p=nsstr
[6]: https://packagephobia.now.sh/badge?p=nsstr

[0]: https://bumblehead.com                            "bumblehead"

![scrounge](https://github.com/iambumblehead/scroungejs/raw/main/img/hand.png)

(The MIT License)

Copyright (c) [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
