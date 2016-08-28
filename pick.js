"use strict"
const Combinatorics = require('js-combinatorics');

const deepEqual = (o1, o2) => JSON.stringify(o1) === JSON.stringify(o2)

const isMatch = (fn, input, out) => {
    try {
      return deepEqual(fn(...input), out)
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
    return correctArityInputs.reduce(((prev, curr) => isMatch(fn, curr, out) || prev), false)
  })
}

module.exports = pick
