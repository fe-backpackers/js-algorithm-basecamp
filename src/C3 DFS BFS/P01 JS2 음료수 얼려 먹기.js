function solution(ice) {
  const n = ice.length;
  const m = ice[0].length;
  let graph = JSON.parse(JSON.stringify(ice));

  function dfs(r, c) {
    if (r < 0 || r >= n || c < 0 || c >= m) {
      return false;
    }
    if (graph[r][c] === 0) {
      graph[r][c] = 1;
      dfs(r - 1, c);
      dfs(r, c - 1);
      dfs(r + 1, c);
      dfs(r, c + 1);
      return true;
    }
  }

  let result = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (dfs(row, col)) {
        result++;
      }
    }
  }
  return result;
}
const ice = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];
console.log(solution(ice));
