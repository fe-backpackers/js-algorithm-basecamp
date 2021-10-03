// function solution(n, m, k) {
//   const set = new Set();
//   function combination(tmp, idx) {
//     if (tmp.length === 2) {
//       const key = [...tmp].sort((a, b) => a - b).join("+");
//       set.add(key);
//     } else {
//       for (let i = idx; i < n; i++) {
//         if (tmp.length && k[tmp[0]] === k[i]) continue;
//         tmp.push(i);
//         combination(tmp, i + 1);
//         tmp.pop();
//       }
//     }
//   }
//   combination([], 0);
//   return set.size;
// }

function solution2(n, m, k) {
  let result = 0;
  const counter = new Array(11).fill(0);
  k.forEach((weight) => counter[weight]++); // 각 무게마다 볼링공이 몇개 있는지 체크한다.

  for (let i = 1; i <= m; i++) {
    n -= counter[i];
    result += counter[i] * n;
  }
  return result;
}

[[5, 3, [1, 3, 2, 3, 2]]].forEach(([n, m, k]) => {
  console.log(solution2(n, m, k));
});
