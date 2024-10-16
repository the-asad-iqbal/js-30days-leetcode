/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let arrToReturn = [];

  for (let i = 0; i < arr.length; i++) {
    const res = fn(arr[i], i);
    arrToReturn.push(res);
  }

  return arrToReturn;
};
