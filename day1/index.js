import fs from "fs";

export class AdventFile {
  constructor(file) {
    this.file = file;
    this.row1 = [];
    this.row2 = [];
    this.result = 0;
  }

  read = () => {
    return fs.readFile(this.file, "utf8", (err, data) => {
      if (err) console.error(err);

      const lines = data.split(/\r\n|\n/);
      lines.map((row) => {
        const rowArr = row.split("   ");
        this.row1.push(rowArr[0]);
        this.row2.push(rowArr[1]);
      });

      console.log("CALC");

      this.row1.sort();
      this.row2.sort();
      console.log(this.row1);

      this.row1.map((item, index) => {
        console.log(
          this.row1[index],
          this.row2[index],
          this.row1[index] - this.row2[index]
        );
        this.result += Math.abs(this.row1[index] - this.row2[index]);
      });

      console.log("result", this.result);
      return this.result;
    });
  };
}
