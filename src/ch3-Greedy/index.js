const solution_02 = require("./02/solution");
const solution_03 = require("./03/solution");
const solution_04 = require("./04/solution");

const solutions = {
  getInputs(dir) {
    return require("fs")
      .readFileSync(require("path").resolve(__dirname, `${dir}/input.txt`))
      .toString()
      .split("\n");
  },

  solution_02() {
    const input = this.getInputs("02");
    const [n, m, k] = input[0].split(" ").map(Number);
    const nums = input[1].split(" ").map(Number);
    return solution_02(n, m, k, nums);
  },

  solution_03() {
    const [, ...input2] = this.getInputs("03");
    const arr = [...input2].map((v) => v.split(" ").map(Number));
    return solution_03(arr);
  },

  solution_04() {
    const [n, k] = this.getInputs("04")[0].split(" ").map(Number);
    return solution_04(n, k);
  }
};

console.log(solutions.solution_02());
console.log(solutions.solution_03());
console.log(solutions.solution_04());
