import * as assert from "assert";
import * as readline from "readline";
import { heappop, heappush } from "../.../../../../../lib/heapq";

const comp = (
  [, a]: [[number, number], number],
  [, b]: [[number, number], number]
) => a - b;

const isInRange = (target: number, start: number, end: number) =>
  target >= start && target < end;

const solve = (n: number, graph: number[][]) => {
  const sd = Array.from(Array(n), () => Array<number>(n).fill(Infinity));
  sd[0][0] = graph[0][0];

  const hq: [[number, number], number][] = [[[0, 0], sd[0][0]]];
  while (true) {
    const top = heappop(hq, comp);
    if (top == null) {
      break;
    }

    const [[cx, cy], dist] = top;
    if (dist > sd[cx][cy]) continue;

    for (const [dx, dy] of [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ]) {
      const [nx, ny] = [cx + dx, cy + dy];
      if (!isInRange(nx, 0, n)) continue;
      if (!isInRange(ny, 0, n)) continue;

      const ndist = dist + graph[nx][ny];
      if (ndist < sd[nx][ny]) {
        sd[nx][ny] = ndist;
        heappush(hq, [[nx, ny], ndist], comp);
      }
    }
  }

  return sd[n - 1][n - 1];
};

const io = async () => {
  const rl = readline.createInterface({ input: process.stdin });
  const iter: AsyncIterator<string, void, never> = rl[Symbol.asyncIterator]();
  const ret = [];

  const T = Number((await iter.next()).value);
  for (let t = 0; t < T; t++) {
    const N = Number((await iter.next()).value);
    const graph: number[][] = [];
    for (let n = 0; n < N; n++) {
      graph.push((await iter.next()).value!.split(" ").map(Number));
    }

    ret.push(solve(N, graph));
  }
  rl.close();

  console.log(ret.join("\n"));
};

(async () => {
  await io();
})();

assert.equal(
  solve(3, [
    [5, 5, 4],
    [3, 9, 1],
    [3, 2, 7],
  ]),
  20
);
