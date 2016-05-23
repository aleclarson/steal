var isObject;

isObject = require("isObject");

module.exports = function(obj, key, defaultValue) {
  var result;
  if (!isObject(obj)) {
    throw TypeError("'obj' must be an object!");
  }
  if (typeof key !== "string") {
    throw TypeError("'key' must be a string!");
  }
  result = obj[key];
  if (result === void 0) {
    result = defaultValue;
  } else {
    delete obj[key];
  }
  return result;
};

//# sourceMappingURL=../../map/src/steal.map
