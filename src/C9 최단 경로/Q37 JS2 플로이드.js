function solution(n, m, cities) {
  let graph = Array(n)
    .fill()
    .map(() => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }
  cities.forEach(
    ([start, end, cost]) =>
      graph[start - 1][end - 1] > cost && (graph[start - 1][end - 1] = cost)
  );
  for (let i = 0; i < n; i++) {
    for (let a = 0; a < n; a++) {
      for (let b = 0; b < n; b++) {
        graph[a][b] = Math.min(graph[a][b], graph[a][i] + graph[i][b]);
      }
    }
  }
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      graph[a][b] === Infinity && (graph[a][b] = 0);
    }
  }

  return graph;
}
const n = 5;
const m = 14;
const cities = [
  [1, 2, 2],
  [1, 3, 3],
  [1, 4, 1],
  [1, 5, 10],
  [2, 4, 2],
  [3, 4, 1],
  [3, 5, 1],
  [4, 5, 3],
  [3, 5, 10],
  [3, 1, 8],
  [1, 4, 2],
  [5, 1, 7],
  [3, 4, 2],
  [5, 2, 4],
];

console.log(solution(n, m, cities));
