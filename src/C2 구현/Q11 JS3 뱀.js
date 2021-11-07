function solution(
  boardSize,
  appleCount,
  applePositions,
  snakeCount,
  snakePositions
) {
  let currentPositionHead = [0, 0];
  let currentPositionTail = [0, 0];
  let currentPositionStack = [];
  let currentPositionStackIdx = 0;
  let currentDirection = "R";
  const directions = ["U", "R", "D", "L"];
  const directionsAction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let directionsIdx = 0;

  let board = Array(boardSize)
    .fill()
    .map(() => Array(boardSize).fill(0));
  applePositions.forEach(([row, col]) => (board[row - 1][col - 1] = "A"));

  for (let i = 0; i < boardSize ** 2; i++) {
    // 뱀이 방향 변경할 때
    if (directionsIdx < snakeCount && snakePositions[directionsIdx][0] === i) {
      let currentDirectionIdx = directions.indexOf(currentDirection);
      const directionAction = snakePositions[directionsIdx][1];
      if (directionAction === "L") {
        currentDirectionIdx--;
      } else {
        currentDirectionIdx++;
      }
      if (currentDirectionIdx < 0) currentDirectionIdx = 3;
      if (currentDirectionIdx > 3) currentDirectionIdx = 0;
      currentDirection = directions[currentDirectionIdx];
      directionsIdx++;
    }

    const [actionRow, actionCol] =
      directionsAction[directions.indexOf(currentDirection)];
    const [headRow, headCol] = currentPositionHead;

    // 뱀이 벽을 만날 경우
    if (
      headRow + actionRow > boardSize - 1 ||
      headRow + actionRow < 0 ||
      headCol + actionCol > boardSize - 1 ||
      headCol + actionCol < 0
    ) {
      return i + 1;
    }

    currentPositionHead = [headRow + actionRow, headCol + actionCol];
    currentPositionStack.push(currentPositionHead);
    const [finalHeadRow, finalHeadCol] = currentPositionHead;
    // 뱀이 자신의 몸을 만날 경우
    if (board[finalHeadRow][finalHeadCol] === 1) {
      return i + 1;
    }
    const [tailRow, tailCol] = currentPositionTail;
    // 사과를 만나지 않은 경우
    if (board[finalHeadRow][finalHeadCol] !== "A") {
      board[tailRow][tailCol] = 0;
      // 머리 방향과 꼬리방향이 서로 다름 주의(스택으로 해결)
      currentPositionTail = currentPositionStack[currentPositionStackIdx];
      currentPositionStackIdx++; // shift 지양
    }
    board[finalHeadRow][finalHeadCol] = 1;
  }

  return;
}

// const N = 6, K = 3;
// const APPLES = [
//   [3, 4],
//   [2, 5],
//   [5, 3],
// ];
// const SNAKE_DIRECTION_COUNT = 3;
// const SNAKE_DIRECTION_INFO = [
//   [3, 'D'],
//   [15, 'L'],
//   [17, 'D']
// ];
const N = 10,
  K = 4;
const APPLES = [
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
];
const SNAKE_DIRECTION_COUNT = 4;
const SNAKE_DIRECTION_INFO = [
  [8, "D"],
  [10, "D"],
  [11, "D"],
  [13, "L"],
];

console.log(
  solution(N, K, APPLES, SNAKE_DIRECTION_COUNT, SNAKE_DIRECTION_INFO)
);
