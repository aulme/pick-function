"use strict"
const R = require('ramda')

module.exports = x => eval(`(() => (${x}))()`)
