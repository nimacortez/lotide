const assertEqual = function(actual, expected) {
  if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters) {
  const results = {}

  for (const letter of allLetters) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
    }
  }
}
return results;

};

countLetters("How many letters are in this");
console.log(countLetters("How many letters are in this"));
