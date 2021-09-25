// BFS 함수 정의
const bfs = (graph, start, visited, result) => {
  const q = [];
  let head = 0;

  // 현재 노드를 방문 처리
  q.push(start);
  visited[start] = true;

  // 큐가 빌 때까지 반복
  while (head < q.length) {
    // 큐에서 하나의 원소를 뽑는다
    const curr = q[head++];
    // ACTION
    result.push(curr);

    // 해당 원소와 연결된, 아직 방문하지 않은 원소들을 큐에 삽입
    graph[curr]
      .filter((next) => !visited[next])
      .forEach((next) => {
        q.push(next);
        visited[next] = true;
      });
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
bfs(graph, 1, visited, result);

// 방문 순서 출력
// Node.js 는 입출력이 매우 heavy하므로, 제일 마지막에 한번만 출력하는 것이 좋다
console.log(result.join(" ")); // 1 2 3 8 7 4 5 6
