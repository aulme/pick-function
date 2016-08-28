"use strict"
const R = require('ramda')
const Combinatorics = require('js-combinatorics');

const isMatch = (fn, input, out) => {
    try {
      return R.equals(fn(...input), out)
    }
    catch (e) {
      return false
    }
}

const onlyOfLength = (length, arr) => arr.filter(fn => fn.length === length )

const pick = (lib, rawInput, out) => {
  const fns = Object.keys(lib).filter(key => typeof(lib[key]) === 'function')

  const possibleInputs = Combinatorics.permutationCombination(rawInput).toArray()

  return fns.filter(key => {
    const fn = lib[key]
    const correctArityInputs = onlyOfLength(fn.length, possibleInputs)
    return R.any(input => isMatch(fn, input, out), correctArityInputs)
  })
}

module.exports = pick
