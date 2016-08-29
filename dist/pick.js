"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Combinatorics = require('js-combinatorics');

var deepEqual = function deepEqual(o1, o2) {
  return JSON.stringify(o1) === JSON.stringify(o2);
};

var isMatch = function isMatch(fn, input, out) {
  try {
    return deepEqual(fn.apply(undefined, _toConsumableArray(input)), out);
  } catch (e) {
    return false;
  }
};

var onlyOfLength = function onlyOfLength(length, arr) {
  return arr.filter(function (fn) {
    return fn.length === length;
  });
};

var pick = function pick(lib, rawInput, out) {
  var fns = Object.keys(lib).filter(function (key) {
    return typeof lib[key] === 'function';
  });

  var possibleInputs = Combinatorics.permutationCombination(rawInput).toArray();

  return fns.filter(function (key) {
    var fn = lib[key];
    var correctArityInputs = onlyOfLength(fn.length, possibleInputs);
    return correctArityInputs.reduce(function (prev, curr) {
      return isMatch(fn, curr, out) || prev;
    }, false);
  });
};

exports.default = pick;
