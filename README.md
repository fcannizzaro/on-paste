# on-paste
Simple Paste Listener

[![npm](https://img.shields.io/npm/v/on-paste.svg)](https://www.npmjs.com/package/on-paste)
[![npm](https://img.shields.io/npm/dm/on-paste.svg)](https://www.npmjs.com/package/on-paste)

# Install

```sh
npm i --save on-paste
```

# Usage
```javascript
var paste = require('on-paste')();

paste.on('change', (value) => {
  console.log('paste:', value);
});
```

# Module Args

- `polling` time interval (**default**: 200ms)

# Author
Francesco Cannizzaro
