const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      }
    };


    const eqArrays = function(array1, array2) {
      if (array1.length !== array2.length) {
        return false;
      }
      for (let i = 0; i < array1.length; i++) {
        if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
          return false;
        }
        if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {
          return false;
        }
      } 
      return true;
    };
    

const takeUntil = function(array, callback) {
  var results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  } return results; 
}

module.exports = takeUntil;