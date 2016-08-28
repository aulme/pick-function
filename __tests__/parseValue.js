"use strict"
jest.unmock('../parseValue')
jest.unmock('ramda')

describe("pick", () => {
  const parse = require('../parseValue')
  it("parses numbers", () => {
    return expect(parse('10')).toEqual(10)
  })

  it("parses strings", () => {
    return expect(parse("\"hello\"")).toEqual("hello")
  })

  it("parses objects", () => {
    return expect(parse("{a: 20}")).toEqual({a: 20})
  })

  it("parses arrays", () => {
    return expect(parse("[1, 2, 5]")).toEqual([1, 2, 5])
  })

  it("parses functions", () => {
    return expect(parse("x => x + 2")(20)).toEqual(22)
  })

  it("has ramda in scope", () => {
    return expect(parse("R.add(10)")(20)).toEqual(30)
  })
})
