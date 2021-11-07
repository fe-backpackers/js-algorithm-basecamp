function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permutationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(n, numbers, operatorCount) {
  let operatorArray = [];
  operatorCount.forEach((val, idx) => {
    let operator = idx;
    for (let i = 0; i < val; i++) {
      operatorArray.push(operator);
    }
  });
  const fullOperatorArray = permutation(operatorArray, n - 1);
  const answer = fullOperatorArray.map((val) => {
    let sum = 0;
    numbers.forEach((subVal, subIdx) => {
      if (subIdx === 0) {
        sum = subVal;
      } else {
        switch (val[subIdx - 1]) {
          case 0:
            sum += subVal;
            break;
          case 1:
            sum -= subVal;
            break;
          case 2:
            sum *= subVal;
            break;
          case 3:
            sum = parseInt(sum / subVal);
            break;
        }
      }
    });

    return sum;
  });
  return [Math.max(...answer), Math.min(...answer)];
}

// const N = 3;
// const Numbers = [3, 4, 5];
// const operatorCount = [1, 0, 1, 0];
const N = 6;
const Numbers = [1, 2, 3, 4, 5, 6];
const operatorCount = [2, 1, 1, 1];
console.log(solution(N, Numbers, operatorCount));
console.log(parseInt(-11.1));
