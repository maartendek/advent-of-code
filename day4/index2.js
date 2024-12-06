import { adventFile } from "../lib/advent-file.js";
const file = await adventFile(4);

const word = "MAS";
const rowLength = file[0].length;
const fileLength = file.length;
let rowArray = [];
let wordFound = 0;

file.forEach((row, rowIndex) => {
  rowArray = row.split("");
  rowArray.forEach((char, charIndex) => {
    if (char === "A") {
      if (
        rowIndex < fileLength - 1 &&
        rowIndex > 0 &&
        charIndex <= rowLength - 1 &&
        charIndex > 0
      ) {
        if (
          // down right
          ((file[rowIndex - 1].at(charIndex - 1) === word.at(0) &&
            file[rowIndex + 1].at(charIndex + 1) === word.at(2)) ||
            (file[rowIndex - 1].at(charIndex - 1) === word.at(2) &&
              file[rowIndex + 1].at(charIndex + 1) === word.at(0))) &&
          // down left
          ((file[rowIndex - 1].at(charIndex + 1) === word.at(0) &&
            file[rowIndex + 1].at(charIndex - 1) === word.at(2)) ||
            (file[rowIndex - 1].at(charIndex + 1) === word.at(2) &&
              file[rowIndex + 1].at(charIndex - 1) === word.at(0)))
        ) {
          wordFound++;
        }
      }
    }
  });
});

console.log("wordFound", wordFound);
