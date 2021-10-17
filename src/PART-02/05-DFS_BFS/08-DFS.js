// DFS 예제

/**
 *
 * @param {Array2D} graph 노드 간 연결
 * @param {Number} v 현재 노드 번호
 * @param {Array2D} visited 노드 방문 배열
 */
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);

  // 현재 노드와 인접한 노드를 재귀적으로 방문
  for (const i of graph[v]) {
    if (!visited[i]) dfs(graph, i, visited);
  }
}

// 각 노드가 연결된 정보를 인접 리스트로 표현
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

// 각 노드가 방문된 정보를 담은 배열
const visitedArray = Array(graph.length).fill(false);

// 정의된 dfs 함수 호출
dfs(graph, 1, visitedArray);
