const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); 

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  it("returns '5' for ['5']", () => {
      assert.strictEqual(tail(['5']), '5'); 
    });
  });
});

module.exports = assertEqual;