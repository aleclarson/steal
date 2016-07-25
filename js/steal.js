var assert, getProto, isObjectLike;

getProto = require("getProto");

assert = require("assert");

module.exports = function(obj, key, defaultValue) {
  var result;
  assert(isObjectLike(obj), "'obj' must be object-like!");
  assert(typeof key === "string", "'key' must be a string!");
  result = obj[key];
  if (result === void 0) {
    result = defaultValue;
  }
  delete obj[key];
  return result;
};

isObjectLike = function(value) {
  if (value instanceof Object) {
    return true;
  }
  return !getProto(value);
};

//# sourceMappingURL=map/steal.map
