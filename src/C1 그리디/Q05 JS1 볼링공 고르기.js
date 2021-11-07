// 책 풀이
function solution(n, m, balls) {
  let weight = new Array(m + 1).fill(0);
  let count = 0;
  console.log(weight);
  balls.forEach((val) => weight[val]++);
  console.log(weight);
  weight.forEach((val, idx) => {
    n -= val;
    count += weight[idx] * n;
  });
  return count;
}

// my style
// function solution(balls) {
// 	let count = 0;
// 	balls.forEach((val, idx) => {
// 		const eachCount = balls.slice(idx + 1).filter((weight) => weight !== val)
// 			.length;
// 		count += eachCount;
// 	});
// 	return count;
// }
const N = 8,
  M = 5;
const balls = [1, 5, 4, 3, 2, 4, 5, 2];
console.log(solution(N, M, balls));
