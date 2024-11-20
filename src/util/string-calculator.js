export function addNumbers(numbers) {
  let del = ",";

  if (numbers.startsWith("//")) {
    const [delimiterLine, restOfNumbers] = numbers.split("\n", 2);
    del = delimiterLine.slice(2);
    numbers = restOfNumbers;
  }

  let arr = numbers.replaceAll("\n", del).split(del).map(Number);

  const negatives = arr.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}
