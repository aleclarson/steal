
steal = require ".."

describe "steal()", ->

  it "deletes the 'key' from the 'obj'", ->
    obj = value: 1
    steal obj, "value"
    expect obj.hasOwnProperty "value"
      .toBe no

  it "returns the value of 'obj[key]'", ->
    obj = value: 1
    expect steal obj, "value", 2
      .toBe 1

  it "returns the 'defaultValue' if 'obj[key]' returns undefined", ->
    obj = value: undefined
    expect steal obj, "value", 1
      .toBe 1
