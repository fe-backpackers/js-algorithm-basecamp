// 입력
// N * M
// 0: 구멍, 1: 칸막이
// 1로 나누어진 0의 영역 = 아이스크림 개수

// 상하좌우 탐색
const dx = [0, 0, 1, -1]
const dy = [1, -1, 0, 0]

function solution(N, M, graph) {
  let answer = 0

  for (let i=0; i < N; i++) {
    for (let j=0; j < M; j++) {
      // 값이 0인 좌표를 대상으로 dfs 탐색 및 count 한다.
      if (graph[i][j] == 0) {
        dfs(i, j, N, M, graph)
        answer++
      }
    }
  }

  return answer
}

function dfs(x, y, N, M, graph) {
  // (x, y) 위치의 노드 값을 1로 채운다.
  graph[x][y] = 1

  // (x, y) 위치의 상, 하, 좌, 우를 탐색한다.
  for (let k=0; k < 4; k++) {
    const nx = x + dx[k]
    const ny = y + dy[k]

    // (nx, ny)의 좌표 조건, 값 조건을 검증한다.
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] == 0) {
      dfs(nx, ny, N, M, graph)
    }
  }
}

// 입력 예시
const N = 4
const M = 5
const graph = [[0,0,1,1,0], [0,0,0,1,1], [1,1,1,1,1], [0,0,0,0,0]]

console.log(solution(N, M, graph)) // 3
