/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  const obj = {
    toBe: function toBe(value) {
      if (val === value && typeof val == typeof value) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function notToBe(value) {
      if (val !== value) {
        return true;
      }
      throw new Error("Equal");
    },
  };
  return obj;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
