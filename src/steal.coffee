
getProto = require "getProto"
isDev = require "isDev"

module.exports = (obj, key, defaultValue) ->

  if isDev and not isObjectLike obj
    throw TypeError "'obj' must be object-like!"

  if isDev and typeof key isnt "string"
    throw TypeError "'key' must be a string!"

  result = obj[key]
  delete obj[key]

  if result is undefined
    return defaultValue
  return result

isDev and
isObjectLike = (value) ->

  if value

    if value instanceof Object
      return yes

    if not getProto value
      return yes

  return no
