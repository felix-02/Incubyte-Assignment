export function addNumbers(numbers) {
  return numbers
    .split(",")
    .map((itm) => +itm)
    .reduce((acc, curr) => acc + curr, 0);
}
