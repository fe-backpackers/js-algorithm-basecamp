const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

function solution(N, M, graph) {
  let answer = 0;

  answer = bfs(0, 0, N, M, graph);

  return answer;
}

function bfs(x, y, N, M, graph) {
  const queue = [];

  queue.push([x, y]);

  while (Array.isArray(queue) && queue.length > 0) {
    const [x, y] = queue.shift();

    // 상하좌우 탐색
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      // 탐색 조건 확인
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] == 1) {
        // 시작점 건너뛰기
        if (nx == 0 && ny == 0) continue;
        // 거리 계산
        graph[nx][ny] = graph[x][y] + 1;
        // 다음 시작할 좌표 추가
        queue.push([nx, ny]);
      }
    }
  }

  return graph[N - 1][M - 1];
}

// 입력 예시
const N = 5;
const M = 6;
const example = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(solution(N, M, example));
