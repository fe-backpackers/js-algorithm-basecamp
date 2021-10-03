/**
 * 무지의 먹방 라이브 프로그래머스 https://programmers.co.kr/learn/courses/30/lessons/42891
 * 무지는 1번 음식부터 먹기 시작하며, 회전판은 번호가 증가하는 순서대로 음식을 무지 앞으로 가져다 놓는다.
 마지막 번호의 음식을 섭취한 후에는 회전판에 의해 다시 1번 음식이 무지 앞으로 온다.
 무지는 음식 하나를 1초 동안 섭취한 후 남은 음식은 그대로 두고, 다음 음식을 섭취한다.
 다음 음식이란, 아직 남은 음식 중 다음으로 섭취해야 할 가장 가까운 번호의 음식을 말한다.
 회전판이 다음 음식을 무지 앞으로 가져오는데 걸리는 시간은 없다고 가정한다.

 constraints
 food_times 는 각 음식을 모두 먹는데 필요한 시간이 음식의 번호 순서대로 들어있는 배열이다.
 k 는 방송이 중단된 시간을 나타낸다.
 만약 더 섭취해야 할 음식이 없다면 -1을 반환하면 된다.

 * @param food_times
 * @param k
 * @returns {number|*}
 */

const solution = (food_times, k) => {
  // 가능한 빨리 먹을 수 있는 음식부터 정렬
  const sorted_food_times = food_times
    .map((v, i) => ({ totalSecToConsume: v, index: i + 1 }))
    .sort((a, b) => a.totalSecToConsume - b.totalSecToConsume);
  for (let i = 0; i < food_times.length; i++) {
    //현재 인덱스 i 음식의 남은 시간
    const currentRemainingTime =
      i == 0
        ? sorted_food_times[i].totalSecToConsume - 0
        : sorted_food_times[i].totalSecToConsume -
          sorted_food_times[i - 1].totalSecToConsume;
    //현재 인덱스 i의 남은 음식을 다 먹는 다고 가정 했을 시
    const timeForCurrentLoop =
      currentRemainingTime * (sorted_food_times.length - i);

    if (timeForCurrentLoop > k) {
      return sorted_food_times.slice(i).sort((a, b) => a.index - b.index)[
        k % (sorted_food_times.length - i)
      ].index;
    }
    k -= timeForCurrentLoop;
  }
  return -1;
};

module.exports = solution;
