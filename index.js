const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

const assertArraysEqual  = require('./assertArraysEqual');
const assertEqual        = require('./assertEqual');
const countLetters       = require('./countLetters');
const countOnly          = require('./countOnly');
const eqArrays           = require('./eqArrays');
const findKey            = require('./findKey');
const findKeyByValue     = require('./findKeyByValue');
const letterPositions    = require('./letterPositions');
const map                = require('./map');
const takeUntil          = require('./takeUntil');

module.exports = {
  assertArraysEqual,
  assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  findKey,
  findKeyByValue,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
};