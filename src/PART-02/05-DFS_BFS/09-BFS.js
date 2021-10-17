// BFS 예제

function bfs(graph, start, visited) {
  // 큐 생성
  const queue = [start];
  // 현재 노드 방문처리
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.length > 0) {
    // 큐에서 원소 추출
    const v = queue.shift();
    console.log(v);

    // 해당 원소와 연결된, 아직 방문하지 않은 노드를 큐에 추가
    for (const i of graph[v]) {
      // 방문하지 않은 노드인 경우,
      if (!visited[i]) {
        // 방문 처리 후, 큐에 삽입
        visited[i] = true;
        queue.push(i);
      }
    }
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

// 정의된 bfs 함수 호출
bfs(graph, 1, visitedArray);
