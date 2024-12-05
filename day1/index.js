import { adventFile } from "../lib/advent-file.js";

const row1 = [];
const row2 = [];
let result = 0;

const file = await adventFile(1);

file.map((row) => {
  const rowArr = row.split("   ");
  row1.push(rowArr[0]);
  row2.push(rowArr[1]);
});

row1.sort();
row2.sort();

row1.map((item, index) => {
  console.log(row1[index], row2[index], row1[index] - row2[index]);
  result += Math.abs(row1[index] - row2[index]);
});

console.log("result", result);
