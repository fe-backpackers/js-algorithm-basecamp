/**
 * 03.문자열 뒤집기 -p313
 * 다솜이는 0과 1로만 이루어진 문자열 S를 가지고 있습니다. 다솜이는 이 문자열 S에 있는 모든 숫자를 전부 같게 만들려고 합니다. 다솜이 할 수 있는 행동은 S에서 연속된 하나 이상의 숫자를 잡고 모두 뒤집는 것입니다.
예를 들어 S = 0001100일 때는 다음과 같습니다.

1. 전체를 뒤집으면 1110011이 된다.
2. 4번째 문자무터 5번째 문자까지 뒤집으면 1111111이 되어서 두번만에 모두 같은 숫자로 만들 수 있다.
하지만, 처음부터 4, 5번째 문자를 뒤집었으면 한번에 0000000이 되어서 1번만에 모두 같은 숫자로 만들 수 있습니다.

문자열 S가 주어졌을 때, 다솜이가 해야하는 행동의 최소 횟수를 출력하시오.

constraints
str<=1,000,000

 * @param {String} str
 * @returns {Number} 최소행동횟수
 */
const solution = (str) => {
  //최적의 해 :
  //구하고자하는것 :최소의 횟수로 문자열을 뒤집어 모든 숫자가 같게 하기

  if (Array.from(str).every((v, idx, arr) => v === arr[0])) return 0;
  let countTo1 = 0; //1로 바꾸는 경우 (0인경우)
  let countTo0 = 0; //0으로 바꾸는 경우 (1인경우)
  let num = Number(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (num !== Number(str[i])) {
      //다르다면,
      Number(str[i]) === 1 ? (countTo1 += 1) : (countTo0 += 1);
      num = Number(str[i]);
    }
  }
  return Math.min(countTo0, countTo1);
};

module.exports = solution;
