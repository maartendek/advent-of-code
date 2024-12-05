import fs from "node:fs/promises";

export async function adventFile(day, test = false) {
  const file = `day${day}/data${test ? "_test" : ""}.txt`;
  console.log("trying for file ", file, process.cwd());
  const data = await fs.readFile(file, "utf8");
  console.log("success", data);
  return data.split(/\r\n|\n/);
}
