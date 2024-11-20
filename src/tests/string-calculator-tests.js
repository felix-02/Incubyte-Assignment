import { addNumbers } from "../util/string-calculator";

export function stringCalculatorTests() {
  // Input a string of comma separated numbers
  // Output an integer, sum of the numbers
  console.log(addNumbers("")); // 0
  console.log(addNumbers("1")); // 1
  console.log(addNumbers("1,5")); // 6

  // Allow addition of new lines b/w numbers
  console.log(addNumbers("1\n2,3")); //6
  console.log(addNumbers("1\n2,3,5\n4")); //15

  // support diff delimeters at the start
  console.log(addNumbers("//;\n1;2")); // 3
  console.log(addNumbers("//|\n1|2|3")); // 6

  // Exception cases
  try {
    console.log(addNumbers("1,-2,3")); // Throws: "Negatives not allowed: -2"
  } catch (e) {
    console.error(e.message);
  }

  try {
    console.log(addNumbers("//;\n1;-2;-3")); // Throws: "Negatives not allowed: -2, -3"
  } catch (e) {
    console.error(e.message);
  }
}
