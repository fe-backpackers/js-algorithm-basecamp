//보류
// const solution2 = (graph, n, l, r) => {
//   function updateGraph(graph, avg) {
//     for (let i = 0; i < graph.length; i++) {
//       for (let j = 0; j < graph.length; j++) {
//         if (unionGraph[i][j] === true) {
//           graph[i][j] = avg;
//           unionGraph[i][j] = false;
//         }
//       }
//     }
//     return graph;
//   }
//   let cnt = 0;
//   const shouldBorderOpen = (a, b) =>
//     l <= Math.abs(a - b) && Math.abs(a - b) <= r;
//   const isNotInRange = (x, y) =>
//     x < 0 || x >= n || y < 0 || y >= n;
//   //북동남서 확인
//   const dx = [-1, 0, 1, 0];
//   const dy = [0, 1, 0, -1];
//   let sum = 0;
//   const unionGraph = Array.from({ length: n }, () =>
//     Array(n).fill(false)
//   );
//   let flag = true;
//   let copiedGraph = JSON.parse(JSON.stringify(graph));

//   //unionGraph

//   //dfs가 끝나면
//   //update function -> update all uniongraph value
//   //다시 dfs 시작
//   //언제까지? sum 이 0 일 때까지

//   while (true) {
//     let sum = 0; //유니온국가들의 인구수 합
//     let unionCnt = 0; // 유니온 국가수
//     dfs(0, 0, 0, 0);

//     function dfs(x, y, nx, ny) {
//       if (isNotInRange(nx, ny)) return;
//       if (nx !== 0 || ny !== 0 || x !== 0 || y !== 0) {
//         if (
//           !shouldBorderOpen(
//             copiedGraph[x][y],
//             copiedGraph[nx][ny]
//           )
//         )
//           return;
//       }

//       if (unionGraph[nx][ny]) return;
//       //유니온이 된 국가는 true로
//       unionGraph[nx][ny] = true;
//       sum += copiedGraph[nx][ny];
//       unionCnt += 1;
//       x = nx;
//       y = ny;
//       dfs(x, y, dx[0] + Number(x), dy[0] + Number(y)); //북
//       dfs(x, y, dx[1] + Number(x), dy[1] + Number(y)); //동
//       dfs(x, y, dx[2] + Number(x), dy[2] + Number(y)); //남
//       dfs(x, y, dx[3] + Number(x), dy[3] + Number(y)); //서
//     }

//     if (unionCnt === 1) {
//       break;
//     }

//     // //인구이동 한번 끝 ,avg
//     cnt += 1;
//     let avg = parseInt(sum / unionCnt);

//     //update 인구수
//     copiedGraph = updateGraph(copiedGraph, avg);
//   }
//   return cnt;
// };

// console.log(
//   solution2(
//     [
//       [10, 15, 20],
//       [20, 30, 25],
//       [40, 22, 10]
//     ],
//     3,
//     5,
//     10
//   )
// );
