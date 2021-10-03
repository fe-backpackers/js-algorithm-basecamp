function solution(m, k, array) {
  array.sort((a, b) => b - a);
  const Num1 = array[0];
  const Num2 = array[1];
  const merge = new Array(k).fill(Num1).concat(Num2);
  console.log(merge);

  const quotient = Math.floor(m / (k + 1));
  const remainder = m % (k + 1);
  console.log(quotient, remainder);
  return (
    merge.reduce((acc, val) => acc + val) * quotient +
    merge.slice(0, remainder).reduce((acc, val) => acc + val)
  );
}

// function solution(numbers, m, k) {
//   numbers.sort((a, b) => b - a);
//   let sum = 0;
//   let count = 0;
//   const [a, b] = numbers;
//   for (let i = 0; i < m; i++) {
//     if (count < k) {
//       sum += a;
//     } else {
//       sum += b;
//       count = 0;
//     }
//     count++;
//   }
//   return sum;
// }

const M = 9;
const K = 3;
const array = [2, 4, 5, 4, 6];
console.log(solution(M, K, array));
