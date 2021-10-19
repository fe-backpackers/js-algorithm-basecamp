// STDIN 가공
const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, , K, X] = input[0].split(" ").map(Number);
const roads = input.slice(1).map((str) => str.split(" ").map(Number));

// graph 초기화
const graph = Array(N + 1)
  .fill(0)
  .map(() => []);

for (const [curr, next] of roads) {
  graph[curr].push(next);
}

// 방문 배열 초기화
const visited = Array(N + 1).fill(false);

// 큐 초기화
const q = [];
let head = 0;

// 시작 도시 방문 처리
q.push([X, 0]);
visited[X] = true;

const answer = [];

// BFS: Flood Fill
while (q.length - head > 0) {
  // 큐에서 원소 뽑기
  const [curr, dist] = q[head++];

  // -> ACTION
  if (dist === K) {
    answer.push(curr);
    continue;
  }

  for (const next of graph[curr]) {
    if (visited[next]) continue;

    // 큐 삽입 -> 방문 처리
    q.push([next, dist + 1]);
    visited[next] = true;
  }
}

console.log(answer.length === 0 ? -1 : answer.sort((a, b) => a - b).join("\n"));
