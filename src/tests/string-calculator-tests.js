import { addNumbers } from "../util/string-calculator";

export function stringCalculatorTests() {
  // Input a string of comma separated numbers
  // Output an integer, sum of the numbers
  console.log(addNumbers("")); // 0
  console.log(addNumbers("1")); // 1
  console.log(addNumbers("1,5")); // 6
}
