export function addNumbers(numbers) {
  let del = ",";

  if (numbers.startsWith("//")) {
    const [delimiterLine, restOfNumbers] = numbers.split("\n", 2);
    del = delimiterLine.slice(2);
    numbers = restOfNumbers;
  }

  let arr = numbers.replaceAll("\n", del).split(del);

  return arr.map((itm) => +itm).reduce((acc, curr) => acc + curr, 0);
}
