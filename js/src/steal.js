var Kind, Objectish, PureObject, assertType;

PureObject = require("PureObject");

assertType = require("assertType");

Kind = require("Kind");

Objectish = [Kind(Object), PureObject];

module.exports = function(obj, key, defaultValue) {
  var result;
  assertType(obj, Objectish);
  assertType(key, String);
  result = obj[key];
  if (result === void 0) {
    result = defaultValue;
  }
  delete obj[key];
  return result;
};

//# sourceMappingURL=../../map/src/steal.map
