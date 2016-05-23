
isObject = require "isObject"

module.exports = (obj, key, defaultValue) ->
  throw TypeError "'obj' must be an object!" unless isObject obj
  throw TypeError "'key' must be a string!" unless typeof key is "string"
  result = obj[key]
  if result is undefined
    result = defaultValue
  else delete obj[key]
  result
