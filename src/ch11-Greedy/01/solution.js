/**
 * 01.모험가 길드 - p311
 *
 * 공포도가 X인 모험가는 반드시 X명이상으로 구성한 모험가 그룹게 참여해야 여행을 떠날 수 있다.
 * N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹수의 최대값을 구하는 프로그램
 *
 * @param {Number} n 총인원수
 * @param {Number[]} nums 공포도 리스트
 */
const solution = (n, nums) => {
  //그룹수가 최대가 되게 하려면 ? 낮은 공포도의 인원으로 최대한 많은 그룹을 만든다.
  //현재 그룹인원
  let memberNum = 0;
  //그룹 수
  let groupNum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 공포도가 현재 그룹 인원보다 많거나 같다면 그룹을 만드는 조건 충족 다음 그룹으로 시작
    if (nums[i] >= memberNum) {
      groupNum += 1;
      memberNum = 0;
    } else {
      memberNum += nums[i];
    }
  }

  return groupNum;
};

module.exports = solution;
