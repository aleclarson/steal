var steal;

steal = require("../src/steal");

describe("steal()", function() {
  it("deletes the 'key' from the 'obj'", function() {
    var obj;
    obj = {
      value: 1
    };
    steal(obj, "value");
    return expect(obj.hasOwnProperty("value")).toBe(false);
  });
  it("returns the value of 'obj[key]'", function() {
    var obj;
    obj = {
      value: 1
    };
    return expect(steal(obj, "value", 2)).toBe(1);
  });
  return it("returns the 'defaultValue' if 'obj[key]' returns undefined", function() {
    var obj;
    obj = {
      value: void 0
    };
    return expect(steal(obj, "value", 1)).toBe(1);
  });
});

//# sourceMappingURL=../../map/spec/steal.map
