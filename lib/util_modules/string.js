/**
 * @description 문자 a에서 b까지 유니코드상의 거리를 리턴.
 * @param {Char} a
 * @param {Char} b
 * @example charDistance('a', 'b') = 1, charDistance('c', 'b') = -1;
 * @return {Number}
 */
exports.unicodeDistance = (a, b) => {
  return b.charCodeAt(0) - a.charCodeAt(0);
};
