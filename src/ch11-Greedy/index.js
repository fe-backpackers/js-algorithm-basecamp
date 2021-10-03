const solution_01 = require("./01/solution");
const solution_02 = require("./02/solution");
const solution_03 = require("./03/solution");
const solution_04 = require("./04/solution");
const solution_06 = require("./06/solution");

const solutions = {
  getInputs: function (dir) {
    return require("fs")
      .readFileSync(require("path").resolve(__dirname, `${dir}/input.txt`))
      .toString();
  },
  solution_01() {
    const [n, nums] = this.getInputs("01").split("\n");
    return solution_01(n, nums.split(" ").map(Number));
  },

  solution_02() {
    const str = this.getInputs("02");
    return solution_02(str);
  },

  solution_03() {
    const str = this.getInputs("03");
    return solution_03(str);
  },
  solution_04() {
    const [n, coins] = this.getInputs("04").split("\n");
    return solution_04(n, coins.split(" ").map(Number));
  },
  solution_06() {
    const [food_times, k] = this.getInputs("06").split("\n");
    return solution_06(food_times, k);
  },
};

console.log(solutions.solution_01());
console.log(solutions.solution_02());
console.log(solutions.solution_03());
console.log(solutions.solution_04());

// console.log(solutions.solution_06());
