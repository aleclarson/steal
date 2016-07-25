
steal = require "../.."

describe "steal(obj, key, defaultValue)", ->

  obj = {}

  it "deletes the 'key' from the 'obj'", ->
    obj.value = 1
    steal obj, "value"
    expect(obj.value).toBe undefined

  it "returns the value of 'obj[key]'", ->
    obj.value = 1
    expect(steal obj, "value").toBe 1

  it "returns the 'defaultValue' if 'obj[key]' doesnt exist", ->
    expect(steal obj, "noValue", 1).toBe 1

  it "doesnt return the 'defaultValue' if 'obj[key]' is set to null", ->
    obj.nullValue = null
    expect(steal obj, "nullValue", 1).toBe null

  it "doesnt return the 'defaultValue' if 'obj[key]' is set to undefined", ->
    obj.undefinedValue = undefined
    expect(steal obj, "undefinedValue", 1).toBe undefined
