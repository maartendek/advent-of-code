import { adventFile } from "../lib/advent-file.js";
const file = await adventFile(4);

const word = "XMAS";
const wordLength = word.length;
const rowLength = file[0].length;
const fileLength = file.length;
let rowArray = [];
let wordFound = 0;

file.forEach((row, rowIndex) => {
  rowArray = row.split("");
  rowArray.forEach((char, charIndex) => {
    if (char === "X") {
      // check right direction
      if (row.substring(charIndex, charIndex + 4) === word) {
        wordFound++;
      }

      // check left direction
      if (
        charIndex >= wordLength - 1 &&
        rowArray[charIndex - 1] === word.at(1) &&
        rowArray[charIndex - 2] === word.at(2) &&
        rowArray[charIndex - 3] === word.at(3)
      ) {
        wordFound++;
      }

      // check down direction
      if (
        rowIndex <= fileLength - wordLength &&
        file[rowIndex + 1].at(charIndex) === word.at(1) &&
        file[rowIndex + 2].at(charIndex) === word.at(2) &&
        file[rowIndex + 3].at(charIndex) === word.at(3)
      ) {
        wordFound++;
      }

      // check up direction
      if (
        rowIndex >= wordLength - 1 &&
        file[rowIndex - 1].at(charIndex) === word.at(1) &&
        file[rowIndex - 2].at(charIndex) === word.at(2) &&
        file[rowIndex - 3].at(charIndex) === word.at(3)
      ) {
        wordFound++;
      }

      // check down right direction
      if (
        rowIndex <= fileLength - wordLength &&
        charIndex <= rowLength - wordLength &&
        file[rowIndex + 1].at(charIndex + 1) === word.at(1) &&
        file[rowIndex + 2].at(charIndex + 2) === word.at(2) &&
        file[rowIndex + 3].at(charIndex + 3) === word.at(3)
      ) {
        wordFound++;
      }

      // check down left direction
      if (
        rowIndex <= fileLength - wordLength &&
        charIndex >= wordLength - 1 &&
        file[rowIndex + 1].at(charIndex - 1) === word.at(1) &&
        file[rowIndex + 2].at(charIndex - 2) === word.at(2) &&
        file[rowIndex + 3].at(charIndex - 3) === word.at(3)
      ) {
        wordFound++;
      }

      // check up right direction
      if (
        rowIndex >= wordLength - 1 &&
        charIndex <= rowLength - wordLength &&
        file[rowIndex - 1].at(charIndex + 1) === word.at(1) &&
        file[rowIndex - 2].at(charIndex + 2) === word.at(2) &&
        file[rowIndex - 3].at(charIndex + 3) === word.at(3)
      ) {
        wordFound++;
      }

      // check up left direction
      if (
        rowIndex >= wordLength - 1 &&
        charIndex >= wordLength - 1 &&
        file[rowIndex - 1].at(charIndex - 1) === word.at(1) &&
        file[rowIndex - 2].at(charIndex - 2) === word.at(2) &&
        file[rowIndex - 3].at(charIndex - 3) === word.at(3)
      ) {
        wordFound++;
      }
    }
  });
});

console.log("wordFound", wordFound);
