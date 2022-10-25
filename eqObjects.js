const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
      }
    };



  const eqObjects = function(object1, object2) {
    let object1Keys = Object.keys(object1);
    let object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
      return false;
    } else {
    for (const key of object1Keys) {
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if
        (typeof object1[key] === "object" && typeof object2[key] === "object")
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else { 
      (object1[key] !== object2[key]) {
      return false;
    }
  }
  } 
  return true; 
    };
  

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

module.exports = eqObjects;