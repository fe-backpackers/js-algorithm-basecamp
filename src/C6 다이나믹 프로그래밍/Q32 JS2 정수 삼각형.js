function solution(n, triangle) {
  let pre = triangle[0];
  let temp = [];

  for (let i = 1; i < n; i++) {
    temp = triangle[i].map((val, idx) => {
      if (idx === 0) return pre[0] + val;
      if (idx === i) return pre[i - 1] + val;
      return Math.max(pre[idx - 1], pre[idx]) + val;
    });
    pre = [...temp];
  }

  return Math.max(...pre);
}

const t = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(5, t));
