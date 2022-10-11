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
    

    const map = function(array, callback) {
      const results = [];
      for (let item of array) {
        results.push(callback(item));
      }
      return results;
    };

const words = ["ground", "control", "to", "major", "tom"];
const results = map(words, word => word[0]);
assertArraysEqual(results, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]);