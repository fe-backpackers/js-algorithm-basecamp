/**
 * 큰 수의 법칙 -p.92 (✍️ O(1))
 *
 * 주어진 수들을 m번 더하여 가장 큰 수를 만드는 법칙.
 * 단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없다.
 *
 * ✅ constraints
 * 2<=n<=1,000
 * 1<=m<=1,000
 * 1<=k<=10,000
 * 입력으로 주어지는 k는 항상 m보다 작거나 같다.
 *
 * @param {Number} n
 * @param {Number} m
 * @param {Number} k
 * @param {Array} nums
 *
 */

function solution_02(n, m, k, nums) {
  //큰수의 법칙
  //가장 큰 수를 고르기 위해 정렬한다. - 그리디의 최적해를 찾을 수 있는 기준
  const [largest, secLargest] = nums.sort((a, b) => b - a);
  let answer = 0;

  let largestCount = (m / (k + 1)) * k; // 반복수열에 대한 횟수
  largestCount += m % (k + 1); // 반복수열을 제외한 나머지 횟수
  let secLargestCount = m - largestCount; //두번째 큰 수의 총 횟수
  answer += largestCount * largest;
  answer += secLargestCount * secLargest;

  return answer;
}

module.exports = solution_02;
