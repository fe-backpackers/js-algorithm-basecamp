import assert from "assert";
import { heappush, heappop } from "../../../../lib/heapq";

const comp = ([, a]: [number, number], [, b]: [number, number]) => a - b;

const dijkstra = (start: number, graph: [number, number][][]) => {
  const sp = Array<number>(graph.length).fill(Infinity);
  sp[start] = 0;

  const hq: [number, number][] = [[start, sp[start]]];

  while (true) {
    const top = heappop(hq, comp);
    if (top == null) break;

    const [curr, dist] = top;
    if (sp[curr] < dist) continue;

    for (const [next, cost] of graph[curr]) {
      const ndist = sp[curr] + cost;
      if (ndist < sp[next]) {
        sp[next] = ndist;
        heappush(hq, [next, sp[next]], comp);
      }
    }
  }

  return sp;
};

const solve = (
  n: number,
  m: number,
  start: number,
  edges: [number, number, number][]
) => {
  const graph: [number, number][][] = Array.from(Array(n + 1), () => []);

  for (const [v1, v2, cost] of edges) {
    graph[v1].push([v2, cost]);
    graph[v2].push([v1, cost]);
  }

  const sp = dijkstra(start, graph);

  return sp.slice(1);
};

assert.deepEqual(
  solve(6, 11, 1, [
    [1, 2, 2],
    [1, 3, 5],
    [1, 4, 1],
    [2, 3, 3],
    [2, 4, 2],
    [3, 2, 3],
    [3, 6, 5],
    [4, 3, 3],
    [4, 5, 1],
    [5, 3, 1],
    [5, 6, 2],
  ]),
  [0, 2, 3, 1, 2, 4]
);

export default {};
