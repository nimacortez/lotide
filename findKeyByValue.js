const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {

  for (const key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;