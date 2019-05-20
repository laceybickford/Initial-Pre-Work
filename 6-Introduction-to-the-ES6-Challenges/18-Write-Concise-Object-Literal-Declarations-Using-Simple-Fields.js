/*LESSON SUMMARY: Used simple fields to write concise object literal declarations. */

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
const createPerson = (x, y, z) => ({x, y, z});
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
