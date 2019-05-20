/*LESSON SUMMARY: Used the rest operator with function parameters. */

const sum = (function() {
  "use strict";
  return function sum (...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
