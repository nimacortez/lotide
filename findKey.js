const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  var arr = Object.keys(object);
  for (let i = 0; i < Array.length; i++) {
    if (callback(object[arr[i]])) {
      return arr[i];
    }
  } return undefined;
}




