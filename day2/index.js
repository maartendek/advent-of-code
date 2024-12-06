import { adventFile } from "../lib/advent-file.js";

const reports = await adventFile(2);
let safeReports = 0;

reports.map((row) => {
  if (rowIsSafe(row) || rowCanBeSafe(row)) {
    safeReports++;
  }
});

console.log("safeReports", safeReports);

function rowIsSafe(row) {
  const arLevelDiffs = [];
  const levels = row.split(" ");

  levels.forEach((item, index) => {
    if (index > 0) {
      arLevelDiffs.push(item - levels[index - 1]);
    }
  });

  return (
    arLevelDiffs.every((item) => item > 0 && item < 4) ||
    arLevelDiffs.every((item) => item < 0 && item > -4)
  );
}

function rowCanBeSafe(row) {
  const levels = row.split(" ");

  for (let index = 0; index < levels.length; index++) {
    let possibleRow = levels.slice();
    possibleRow.splice(index, 1);
    if (rowIsSafe(possibleRow.join(" "))) {
      return true;
    }
  }
  return false;
}
