import { adventFile } from "../lib/advent-file.js";

const file = await adventFile(7);
let total = 0;

const isResultPossible = (expected, numbers) => {
  return solve(Number(numbers[0]), 0, expected, numbers);
};

const solve = (totalResult, index, expected, numbers) => {
  // stop if too much
  if (Number(totalResult) > Number(expected)) {
    return false;
  }
  // return the end result
  if (index === numbers.length - 1) {
    return Number(totalResult) == Number(expected);
  }

  // add up the next
  if (
    solve(
      Number(totalResult) + Number(numbers[index + 1]),
      index + 1,
      expected,
      numbers
    )
  ) {
    return true;
  }

  // multiply the next
  if (
    solve(
      Number(totalResult) * Number(numbers[index + 1]),
      index + 1,
      expected,
      numbers
    )
  ) {
    return true;
  }

  // part 2
  if (
    solve(
      String(totalResult) + String(numbers[index + 1]),
      index + 1,
      expected,
      numbers
    )
  ) {
    return true;
  }
};

file.map((row) => {
  const [expected, equations] = row.split(": ");
  const numbers = equations.split(" ");
  if (isResultPossible(Number(expected), numbers)) {
    total += Number(expected);
  }
});

console.log("total", total);
