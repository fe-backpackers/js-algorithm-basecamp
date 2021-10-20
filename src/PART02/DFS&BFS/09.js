// 접근방법
// 1. 시작 노드인 '1'을 큐에 삽입하고 방문 처리를 한다
// 2. 큐에서 노드 '1'을 꺼내고 방문하지 않은 인접 노드 '2', '3', '8'을 모두 큐에 삽입 후 방문 처리를 한다
// 3. 큐에서 노드 '2'을 꺼내고 방문하지 않은 인접 노드 '7'을 큐에 삽입 후 방문 처리를 한다
// 4. 큐에서 노드 '3'을 꺼내고 방문하지 않은 인접 노드 '4', '5'를 모두 큐에 삽입 후 방문 처리를 한다
// 5. 큐에서 노드 '8'을 꺼내고 방문하지 않은 인접 노드가 없으므로 무시한다
// 6. 큐에서 노드 '7'을 꺼내고 방문하지 않은 인접 노드 '6'을 큐에 삽입 후 방문 처리를 한다
// 7. 남아 있는 노드에 방문하지 않은 인접 노드가 없으므로 모든 노드를 차례대로 꺼낸다

function bfs(graph, v, visited, result) {
    // 큐 구현
    const queue = [v];
    // 현재 노드 방문
    visited[v] = true;

    // 큐가 빌 때까지 반복
    while (queue.length) {
        // 큐에서 원소 한 개 뽑아옴
        const node = queue.shift();
        // 뽑아온 원소를 삽입
        result.push(node);

        // 원소의 인접 노드 탐색
        graph[node].forEach(i => {
        // 방문한 적이 없다면
            if (!visited[i]) {
            // 큐에 추가
            queue.push(i);
            // 방문 처리
            visited[i] = true;
            }
        })
    }
}

// 노드 연결 정보
const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
];

// 방문 정보
const visited = new Array(graph.length).fill(false);

// 삽입된 원소 정보
const result = [];

// bfs 함수 호출
bfs(graph, 1, visited, result);

// 삽입된 원소 정보 출력
console.log(result.join(" "))