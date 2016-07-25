var steal;

steal = require("../..");

describe("steal(obj, key, defaultValue)", function() {
  var obj;
  obj = {};
  it("deletes the 'key' from the 'obj'", function() {
    obj.value = 1;
    steal(obj, "value");
    return expect(obj.value).toBe(void 0);
  });
  it("returns the value of 'obj[key]'", function() {
    obj.value = 1;
    return expect(steal(obj, "value")).toBe(1);
  });
  it("returns the 'defaultValue' if 'obj[key]' doesnt exist", function() {
    return expect(steal(obj, "noValue", 1)).toBe(1);
  });
  it("doesnt return the 'defaultValue' if 'obj[key]' is set to null", function() {
    obj.nullValue = null;
    return expect(steal(obj, "nullValue", 1)).toBe(null);
  });
  return it("doesnt return the 'defaultValue' if 'obj[key]' is set to undefined", function() {
    obj.undefinedValue = void 0;
    return expect(steal(obj, "undefinedValue", 1)).toBe(void 0);
  });
});

//# sourceMappingURL=../../map/spec/index.map
