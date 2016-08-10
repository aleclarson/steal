var getProto, isObjectLike;

getProto = require("getProto");

module.exports = function(obj, key, defaultValue) {
  var result;
  if (!isObjectLike(obj)) {
    throw TypeError("'obj' must be object-like!");
  }
  if (typeof key !== "string") {
    throw TypeError("'key' must be a string!");
  }
  result = obj[key];
  delete obj[key];
  if (result === void 0) {
    return defaultValue;
  }
  return result;
};

isObjectLike = function(value) {
  if (value) {
    if (value instanceof Object) {
      return true;
    }
    if (!getProto(value)) {
      return true;
    }
  }
  return false;
};

//# sourceMappingURL=map/steal.map
