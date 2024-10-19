/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    let res = x;
    functions.reverse().forEach((fn) => (res = fn(res)));
    return res;
  };
};