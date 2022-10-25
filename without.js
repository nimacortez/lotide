const assertEqual = require('./assertEqual');

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

  const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
        }
      };

const without = function(source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let r = 0; r < itemsToRemove.length; r++) {
      if (source[i] === itemsToRemove[r]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
}


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;