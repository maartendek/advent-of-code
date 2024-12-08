import { adventFile } from "../lib/advent-file.js";

const file = await adventFile(6);

const secondStep = false;

const maxX = file[0].length;
const maxY = file.length;
const pos = [0, 0];
const positions = [];
let direction = "up";

file.map((row, indexY) => {
  const indexX = row.indexOf("^");
  if (indexX != -1) {
    pos[0] = indexX;
    pos[1] = indexY;
  }
});

function move(x, y, direction) {
  switch (direction) {
    case "up":
      if (file[y - 1].charAt(x) != "#") {
        y = y - 1;
      } else {
        direction = "right";
      }
      break;
    case "right":
      if (file[y].charAt(x + 1) != "#") {
        x++;
      } else {
        direction = "down";
      }
      break;
    case "down":
      if (file[y + 1].charAt(x) != "#") {
        y++;
      } else {
        direction = "left";
      }
      break;
    case "left":
      if (file[y].charAt(x - 1) != "#") {
        x--;
      } else {
        direction = "up";
      }
      break;
  }

  positions.push([x, y]);

  if (
    x > 0 &&
    x < maxX - 1 &&
    y > 0 &&
    y < maxY - 1 &&
    positions.length < 9999
  ) {
    move(x, y, direction);
  }
}

const removeDuplicates = (arr = []) => {
  const map = new Map();
  arr.forEach((x) => map.set(JSON.stringify(x), x));
  arr = [...map.values()];
  return arr;
};

console.log("position = ", pos, "maxX", maxX, "maxY", maxY);

move(pos[0], pos[1], direction);

var uniquePositions = removeDuplicates(positions);

console.log("total = ", uniquePositions, Array.from(uniquePositions).length);
