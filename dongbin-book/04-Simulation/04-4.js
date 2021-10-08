/**
 * @name 게임 개발
 * @link 동빈북 4-4
 * @date 2021-10-08
 * @author sunmon
 */

const Utils = require("../../lib/utils");

const generator = function* () {
  const input = yield; // 콘솔에서 입력받은 한 줄 저장
  const charactor = yield;
  const [n, m] = input.split(" ").map(Number);
  const board = []; // board[x][y] 형태
  for (let i = 0; i < n; i++) {
    const temp = yield;
    board.push(temp.split(" "));
  }
  const answer = solution(n, m, charactor, board);
  console.log(answer);
};

const solution = (n, m, charactor, board) => {
  const dx = [-1, 0, 1, 0]; // 북 동 남 서
  const dy = [0, 1, 0, -1]; // 북 동 남 서
  let [x, y, dir] = charactor.split(" ").map(Number);
  let counter = 0;

  while (true) {
    const cur = [x, y, dir];
    if (board[x][y] !== -1) {
      counter += 1;
      board[x][y] = -1; // 방문한곳은 -1로 표기
    }

    // 왼쪽으로 회전하며 갈 수 있는지 본다
    for (let i = 0; i < 4; i++) {
      dir = [dir - 1 + 4] % 4; // 왼쪽으로 돈다
      const [nx, ny] = [x + dx[dir], y + dy[dir]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (board[nx][ny] === "1" || board[nx][ny] === -1) continue;
      [x, y] = [nx, ny];
      break;
    }

    // 4방향 다 가지 못하고 원래대로 돌아온 경우는 뒤로 한칸 이동
    if (Utils.array.isSame(cur, [x, y, dir])) {
      [x, y] = [x - dx[dir], y - dy[dir]];
      if (board[x][y] === "1") break;
    }
  }

  return counter;
};

Utils.input.readConsole(generator);
