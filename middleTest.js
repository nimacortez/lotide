const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return array.slice(array.length / 2 - 1, array.length / 2 + 1)
  } else {
     let newArray = [];
     let middleNum = Math.round(array.length /2)
     newArray.push(array[middleNum -1]);
     return newArray;
  }
};

const assert = require('chai').assert;
const middle   = require('./middle');

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 1);
  it("returns '5' for ['5']", () => {
      assert.strictEqual(middle(['5']), '5'); 
    });
  });
});