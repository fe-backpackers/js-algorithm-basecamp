/**
 * @description 배열 안의 모든 값이 동일한지 비교한다 (얕은비교)
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
exports.isSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((v, i) => v === arr2[i]);
};
