import { adventFile } from "../lib/advent-file.js";

const reports = await adventFile(2);
let safeReports = 0;

reports.map((row) => {
  const arLevelDiffs = [];
  const levels = row.split(" ");

  levels.forEach((item, index) => {
    if (index > 0) {
      arLevelDiffs.push(item - levels[index - 1]);
    }
  });

  if (
    arLevelDiffs.every((item) => item > 0 && item < 4) ||
    arLevelDiffs.every((item) => item < 0 && item > -4)
  ) {
    safeReports++;
  }
});
console.log("safeReports", safeReports);
