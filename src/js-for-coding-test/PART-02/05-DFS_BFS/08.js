// DFS 함수 정의
const dfs = (graph, v, visited, result) => {
  // 현재 노드를 방문 처리
  visited[v] = true;
  result.push(v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (const next of graph[v]) {
    if (visited[next]) continue;

    dfs(graph, next, visited, result);
  }
};

// 각 노드가 연결된 정보를 배열 자료형으로 표현(2차원 배열)
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

// 각 노드가 방문된 정보를 배열 자료형으로 표현(1차원 배열)
const visited = Array(graph.length).fill(false);

const result = [];

// 정의된 DFS 함수 호출
dfs(graph, 1, visited, result);

// 방문 순서 출력
// Node.js 는 입출력이 매우 heavy하므로, 제일 마지막에 한번만 출력하는 것이 좋다
console.log(result.join(" ")); // 1 2 7 6 8 3 4 5
