import assert from "assert";

const solve = (
  n: number,
  m: number,
  edges: [number, number][],
  x: number,
  k: number
) => {
  const graph = Array.from(Array(n + 1), () =>
    Array<number>(n + 1).fill(Infinity)
  );

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (const [v1, v2] of edges) {
    graph[v1][v2] = 1;
    graph[v2][v1] = 1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  const dist = graph[1][k] + graph[k][x];

  return dist === Infinity ? -1 : dist;
};

assert.equal(
  solve(
    5,
    7,
    [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 4],
      [3, 4],
      [3, 5],
      [4, 5],
    ],
    4,
    5
  ),
  3
);

export default {};
