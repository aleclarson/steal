
getProto = require "getProto"
assert = require "assert"

module.exports = (obj, key, defaultValue) ->
  assert isObjectLike(obj), "'obj' must be object-like!"
  assert typeof key is "string", "'key' must be a string!"
  result = obj[key]
  result = defaultValue if result is undefined
  delete obj[key]
  return result

isObjectLike = (value) ->
  return yes if value instanceof Object
  return not getProto value
