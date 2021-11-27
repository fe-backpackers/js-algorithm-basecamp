import * as fs from "fs";
import * as assert from "assert";

const solve = (n: number, m: number, edges: [number, number, number][]) => {
  const graph = Array.from(Array(n + 1), () =>
    Array<number>(n + 1).fill(Infinity)
  );

  for (const [v1, v2, cost] of edges) {
    graph[v1][v2] = Math.min(graph[v1][v2], cost);
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] =
          i === j ? 0 : Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  const ret = graph
    .slice(1)
    .map((arr) => arr.slice(1).map((dist) => (dist === Infinity ? 0 : dist)));

  return ret;
};

const io = () => {
  const input = fs.readFileSync(0, "utf8").trim().split("\n");
  const N = Number(input[0]);
  const M = Number(input[1]);
  const edges = input
    .slice(2)
    .map((line) => line.split(" ").map(Number) as [number, number, number]);

  const output = solve(N, M, edges);
  console.log(output.map((arr) => arr.join(" ")).join("\n"));
};

io();

assert.deepEqual(
  solve(5, 14, [
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
  ]),
  [
    [0, 2, 3, 1, 4],
    [12, 0, 15, 2, 5],
    [8, 5, 0, 1, 1],
    [10, 7, 13, 0, 3],
    [7, 4, 10, 6, 0],
  ]
);
