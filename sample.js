var paste = require('./index')();

paste.on('change', (value) => {
  console.log('paste:', value);
});
