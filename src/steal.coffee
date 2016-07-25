
PureObject = require "PureObject"
assertType = require "assertType"
Kind = require "Kind"

Objectish = [ Kind(Object), PureObject ]

module.exports = (obj, key, defaultValue) ->
  assertType obj, Objectish
  assertType key, String
  result = obj[key]
  result = defaultValue if result is undefined
  delete obj[key]
  return result
