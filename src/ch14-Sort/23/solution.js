const input = require("fs")
  .readFileSync(
    require("path").resolve(__dirname, `input.txt`)
  )
  .toString()
  .split("\n");

const n = Number(input[0]);
const tempArr = input
  .slice(1, n + 1)
  .map((v) => v.split(" ").map((x) => Number(x) || x));

tempArr.sort((a, b) => {
  //국어점수 desc
  if (b[1] > a[1]) return -1;
  else if (b[1 < a[1]]) return 1;
  else {
    //영어점수 incr
    if (b[2] < a[2]) return -1;
    else if (b[2] > a[2]) return 1;
    else {
      //수학 desc
      if (b[3] > a[3]) return -1;
      else if (b[3] < a[3]) return 1;
      else {
        //chartAt, incr
        if (b[0] > a[0]) return -1;
        else if (b[0] < a[0]) return 1;
        else return 0;
      }
    }
  }
});
let names = [];
tempArr.forEach((v) => names.push(v[0]));
console.log(names.join("\n"));
