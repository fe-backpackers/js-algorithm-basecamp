function solution(city, road, distance, start, linkArray) {
  let result = [];
  let distances = new Array(city + 1).fill(-1);
  distances[start] = 0;

  let graph = makeAdjacencyList(city, linkArray);
  let finalDistances = bfs(graph, start, distances);

  finalDistances.forEach((val, idx) => val === distance && result.push(idx));
  return result.length > 0 ? result : -1;
}

function makeAdjacencyList(cityLength, arr) {
  let result = new Array(cityLength + 1).fill().map(() => []);
  arr.forEach(([start, end]) => result[start].push(end));
  return result.map((val) =>
    val.length !== 0 ? val.sort((a, b) => a - b) : []
  );
}

function bfs(graph, start, distances) {
  let result = distances;
  let que = [start];
  while (que.length !== 0) {
    let v = que[0];
    que.shift();
    for (let i = 0; i < graph[v].length; i++) {
      if (distances[graph[v][i]] === -1) {
        que.push(graph[v][i]);
        distances[graph[v][i]] = distances[v] + 1;
      }
    }
  }

  return result;
}

const N = 4,
  M = 4,
  K = 2,
  X = 1;
const Link = [
  [1, 2],
  [1, 3],
  [2, 3],
  [2, 4],
];
console.log(solution(N, M, K, X, Link));
