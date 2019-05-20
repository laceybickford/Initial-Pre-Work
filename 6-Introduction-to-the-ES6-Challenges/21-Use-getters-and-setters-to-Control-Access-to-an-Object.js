/*LESSON SUMMARY: Used getters and setters. Started using the example on the side but the wording was confusing so looked at how they converted temperatures in the hint section. */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat{
    constructor (fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature () {
      return 5 / 9 * (this.fahrenheit - 32);
    }
    set temperature (celsius) {
      this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
