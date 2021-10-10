/**
 * @name Sprial Matrix
 * @link https://leetcode.com/problems/spiral-matrix/
 * @date 2021-10-10
 * @author sunmon
 * @difficult medium
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const [m, n] = [matrix.length, matrix[0].length];
  const answer = [];
  let [x, y] = [0, 0];
  let d = 0;
  while (answer.length < m * n) {
    if (matrix[x][y] != 999) {
      answer.push(matrix[x][y]);
      matrix[x][y] = 999;
    }
    const [nx, ny] = [x + dir[d][0], y + dir[d][1]];

    if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
      d = (d + 1) % 4;
      continue;
    }
    if (matrix[nx][ny] === 999) {
      d = (d + 1) % 4;
      continue;
    }
    [x, y] = [nx, ny];
  }

  return answer;
};
