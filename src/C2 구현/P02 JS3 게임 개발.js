// 책 풀이

function solution(player, gameMap) {
  let [row, col, direction] = player;
  let visitedMap = Array(gameMap.length)
    .fill()
    .map(() => Array(gameMap[0].length).fill(0));
  visitedMap[row][col] = 1;
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];
  // 반시계방향으로 방향 바꾸는 함수
  function changeCCWDirection(directionNum) {
    directionNum--;
    return directionNum === -1 ? 3 : directionNum;
  }
  let count = 1;
  let turnTime = 0;
  let condition = true;

  while (condition) {
    direction = changeCCWDirection(direction);
    let nr = row + dr[direction];
    let nc = col + dc[direction];
    if (visitedMap[nr][nc] === 0 && gameMap[nr][nc] === 0) {
      visitedMap[nr][nc] = 1;
      row = nr;
      col = nc;
      count++;
      turnTime = 0;
      continue;
    } else {
      turnTime++;
    }
    if (turnTime === 4) {
      nr = row - dr[direction];
      nc = col - dc[direction];
      if (gameMap[nr][nc] === 0) {
        row = nr;
        col = nc;
      } else {
        condition = false;
        // break;
      }
      turnTime = 0;
    }
  }

  return count;
}

const player = [1, 1, 0];
const gameMap = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];
console.log(solution(player, gameMap));
