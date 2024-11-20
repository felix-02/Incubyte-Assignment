export function addNumbers(numbers) {
  let arr = numbers.replaceAll("\n", ",").split(",");

  return arr.map((itm) => +itm).reduce((acc, curr) => acc + curr, 0);
}
