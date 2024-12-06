import { adventFile } from "../lib/advent-file.js";

const file = await adventFile(3);
let fileString = file.join("");

const secondStep = true;

if (secondStep) {
  // const newFile = [];
  // // regex a bit too hard, so first create an array split by the donts
  // file.map((row, index) => {
  //   const arrStart = row.split("do()");
  //   console.log(arrStart);
  //   // then for each row remove the end
  //   arrStart.map((start) => {
  //     const arrToEnd = start.split("don't()");
  //     console.log("end", arrToEnd);
  //     newFile.push(arrToEnd[0]);
  //   });
  // });
  // console.log("newFile", newFile);
  fileString.replace(/don't\(\)[\s\S]*?do\(\)/g, "");
}

const fullRegex = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;
const inRegex = /mul\(([0-9]{1,3}),([0-9]{1,3})\)/g;
let total = 0;

const allMuls = fileString.match(fullRegex);

if (allMuls) {
  allMuls.map((mul) => {
    if (mul) {
      const numbers = Array.from(mul.matchAll(inRegex));
      console.log(Number(numbers[0][1]), Number(numbers[0][2]));
      total += Number(numbers[0][1]) * Number(numbers[0][2]);
    }
  });
}

console.log("total = ", total);
// 77877805
// 175615763
