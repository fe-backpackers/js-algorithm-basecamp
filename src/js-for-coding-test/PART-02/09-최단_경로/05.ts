import assert from "assert";
import { heappush, heappop } from "../../../../lib/heapq";

const comp = ([, a]: [number, number], [, b]: [number, number]) => a - b;

const solve = (
  n: number,
  m: number,
  c: number,
  edges: [number, number, number][]
) => {
  const graph = Array.from(Array(n + 1), () => Array<[number, number]>(0));
  for (const [v1, v2, cost] of edges) {
    graph[v1].push([v2, cost]);
  }

  const shortest = Array<number>(n + 1).fill(Infinity);
  shortest[c] = 0;

  const hq = Array<[number, number]>([c, 0]);
  while (true) {
    const top = heappop(hq, comp);
    if (top == null) break;

    const [curr, dist] = top;
    if (dist > shortest[curr]) continue;

    for (const [next, cost] of graph[curr]) {
      const ndist = dist + cost;
      if (ndist < shortest[next]) {
        shortest[next] = ndist;
        heappush(hq, [next, ndist], comp);
      }
    }
  }

  const availablePath = shortest.filter((p, i) => p !== Infinity && i !== c);
  const count = availablePath.length;
  const totalTime = Math.max(...availablePath);

  return [count, totalTime];
};

assert.deepEqual(
  solve(3, 2, 1, [
    [1, 2, 4],
    [1, 3, 2],
  ]),
  [2, 4]
);

export default {};
