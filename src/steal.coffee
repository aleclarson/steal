
getProto = require "getProto"

module.exports = (obj, key, defaultValue) ->

  if not isObjectLike obj
    throw TypeError "'obj' must be object-like!"

  if typeof key isnt "string"
    throw TypeError "'key' must be a string!"

  result = obj[key]
  delete obj[key]

  if result is undefined
    return defaultValue
  return result

isObjectLike = (value) ->

  if value

    if value instanceof Object
      return yes

    if not getProto value
      return yes

  return no
