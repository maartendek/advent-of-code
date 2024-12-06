import fs from "node:fs/promises";

export async function adventFile(day, test = false) {
  const file = `day${day}/data${test ? "_test" : ""}.txt`;
  const data = await fs.readFile(file, "utf8");
  return data.split(/\r\n|\n/);
}
