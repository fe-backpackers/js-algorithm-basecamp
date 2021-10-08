/**
 * @description 파라미터로 받은 모든 수의 합을 구해 리턴한다
 * @param {array} 더할 수
 * @return {Number} 수의 합
 * @usage utils.sum(1,2,3,4)
 */
exports.sum = (...nums) => {
  return nums.reduce((prev, cur) => prev + cur, 0);
};

/**
 * @description num이 [min, max]를 벗어나는 경우 각각 min, max를 리턴하고, 그 외엔 num을 리턴한다.
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
exports.wrap = (num, min, max) => {
  return Math.min(Math.max(num, min), max);
};

/**
 * @description num이 [min, max] 범위 안에 있는지 리턴한다.
 * @param {Number} num
 * @param {Number} min
 * @param {Number} max
 * @return {Boolean}
 */
exports.isInRange = (num, min, max) => {
  return num >= min && num <= max;
};
