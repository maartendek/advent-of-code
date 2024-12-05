import { adventFile } from "../lib/advent-file.js";

const file = await adventFile(3);

const fullRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const inRegex = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
let total = 0;

file.map((row, index) => {
  const allMuls = row.match(fullRegex);

  if (allMuls) {
    allMuls.map((mul) => {
      if (mul) {
        const numbers = Array.from(mul.matchAll(inRegex));
        total += Number(numbers[0][1]) * Number(numbers[0][2]);
      }
    });
  }
});

console.log("total = ", total);
