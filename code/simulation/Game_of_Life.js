/**
 * @name Game of Life
 * @link https://leetcode.com/problems/game-of-life/
 * @date 2021-10-10
 * @author sunmon
 * @difficulty medium
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const [m, n] = [board.length, board[0].length];
  const expandBoard = Array.from(Array(m + 2), () => Array(n + 2).fill(0));

  // wrap around board using 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      expandBoard[i + 1][j + 1] = board[i][j];
    }
  }

  // get next state
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      let neighbors = -expandBoard[i][j];
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          neighbors += expandBoard[x + i][y + j];
        }
      }

      if (expandBoard[i][j] === 1) {
        if (neighbors < 2) board[i - 1][j - 1] = 0;
        else if (neighbors > 3) board[i - 1][j - 1] = 0;
      } else {
        if (neighbors === 3) board[i - 1][j - 1] = 1;
      }
    }
  }
};
