// 북, 서, 남, 동
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

function solution(info, board) {
  let answer = 1;

  const queue = [];
  queue.push(info);

  while (queue) {
    let [x, y, d] = queue.pop();
    let isMove = false;

    let nx;
    let ny;

    // 네 방향 탐색
    for (let i = 0; i < 4; i++) {
      d = (d + 1) % 4;
      nx = x + dx[d];
      ny = y + dy[d];

      // 바다로 가거나, 가본 적 있는 방향이면 다음 방향 탐색
      if (board[nx][ny] === 1 || board[nx][ny] == 2) continue;

      // 가본 적 없는 육지인 경우, 이동
      if (board[nx][ny] === 0) {
        board[x][y] = 2;
        queue.push([nx, ny, d]);
        isMove = true;
        answer++;
        break;
      }
    }

    // 네 방향 모두 가봤거나, 바다이면 바라보는 방향 그대로 뒤로 이동.
    if (!isMove) {
      nx = x + dx[(d + 2) % 4];
      ny = y + dy[(d + 2) % 4];

      board[x][y] = 2;

      if (board[nx][ny] !== 1) {
        queue.push([nx, ny, d]);
      } else {
        break;
      }
    }
  }

  return answer;
}

const info = [1, 1, 0];
const board = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];
console.log(solution(info, board));
