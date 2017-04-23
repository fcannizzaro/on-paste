var EventEmitter = require('events');
var cp = require("copy-paste");

module.exports = (polling) => {

  var events = new EventEmitter();
  var prev;

  var check = () => {
    cp.paste((err, now) => {
      if (!err && prev && now != prev) {
        events.emit('change', now);
      }
      prev = now || prev;
    });
  }

  setInterval(check, polling || 200);

  return events;

};
