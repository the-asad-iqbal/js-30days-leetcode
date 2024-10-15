/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let curruentVal = init;

  const obj = {
    increment: function increment() {
      curruentVal += 1;
      return curruentVal;
    },
    reset: function reset() {
      curruentVal = init;
      return curruentVal;
    },
    decrement: function decrement() {
      curruentVal -= 1;
      return curruentVal;
    },
  };
  return obj;
};
const counter = createCounter(-5);
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
