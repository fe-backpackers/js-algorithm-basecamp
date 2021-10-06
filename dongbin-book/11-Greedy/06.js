/**
 * @name 무지의 먹방 라이브
 * @link 동빈북 11-6
 * @date 2021-10-01
 * @ref https://programmers.co.kr/learn/courses/30/lessons/42891
 * @author sunmon
 */

function solution(food_times, k) {
  // 다 먹고도 시간이 남으면 -1 리턴
  if (food_times.reduce((prev, cur) => prev + cur, 0) <= k) return -1;

  // 적은 음식 순으로 정렬
  const rest_times = food_times
    .map((el, i) => [el, i])
    .sort((a, b) => (a[0] < b[0] ? -1 : a[1] > b[1] ? 1 : 0));

  let next = 0;
  let eaten = 0; // 한 접시당 먹은 양
  let rest_foods = rest_times.length;
  while (k - (rest_times[next][0] - eaten) * rest_foods >= 0) {
    k -= (rest_times[next][0] - eaten) * rest_foods;
    eaten = rest_times[next][0];
    rest_foods -= 1;
    next += 1;
    console.log(k);
  }

  // 남은 음식들끼리에서 원래 인덱스 순서대로 먹을 차례 정하기
  rest_times.splice(0, next);
  rest_times.sort((a, b) => (a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0));

  return rest_times[k % rest_times.length][1] + 1;
}
