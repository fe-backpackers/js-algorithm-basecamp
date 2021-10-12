/**
 * @name 기둥과 보 설치
 * @link 동빈북 12-6
 * @date 2021-10-10
 * @ref https://programmers.co.kr/learn/courses/30/lessons/60061
 * @author sunmon
 * @description 접근방법:
 * 1. build_frame의 원소를 [x,y,a,b]라고 하고, 설치한 배열을 저장하는 변수를 built라고 한다.
 * 2. if b == 1 : //설치
 *      add [x,y,a] in built
 *      if not isValid(built) : pop [x,y,a] in built
 * 3. if b === 0: //삭제
 *      pop [x,y,a] in built
 *      if not isValid(built): push [x,y,a] in built
 * 4. func isValid:
 *     if a==0:  // 기둥설치
 *       if every [x,y,z] of built:
 *         ([x,y,1] || [x-1,y,1] || [x,y-1,0]) in built || y == 0 ) return True
 *     if a==1: // 보 설치
 *       if every [x,y,z] of built:
 *         ([x,y-1,0] || [x+1,y-1,0] ) in built || ([x-1,y,1] && [x+1,y,1]) in built : return True
 * 5. built를 오름차순 정렬하여 리턴한다.
 */

const assert = require("assert");

const solution = (n, build_frame) => {
  let built = [];
  for (const [x, y, a, b] of build_frame) {
    if (b === 0) {
      // 삭제
      const next = built.filter((el) => !isSame(el, [x, y, a]));
      if (next.every((el) => isValid(...el, next))) {
        built = next;
      }
    } else {
      // 설치
      if (isValid(x, y, a, built)) {
        built.push([x, y, a]);
      }
    }
  }

  return built.sort((a, b) => {
    return a[0] < b[0]
      ? -1
      : a[0] > b[0]
      ? 1
      : a[1] < b[1]
      ? -1
      : a[1] > b[1]
      ? 1
      : a[2] < b[2]
      ? -1
      : a[2] > b[2]
      ? 1
      : 0;
  });
};

const isValid = (x, y, a, built) => {
  if (a === 0) {
    // 기둥
    if (includes(built, [x, y, 1]) || includes(built, [x - 1, y, 1]))
      return true;
    if (includes(built, [x, y - 1, 0])) return true;
    if (y === 0) return true;
  } else if (a === 1) {
    // 보
    if (includes(built, [x, y - 1, 0]) || includes(built, [x + 1, y - 1, 0]))
      return true;
    if (includes(built, [x + 1, y, 1]) && includes(built, [x - 1, y, 1]))
      return true;
  }

  return false;
};

const includes = (arr, elem) => {
  return arr.some((el) => isSame(el, elem));
};

const isSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((v, i) => v === arr2[i]);
};

assert.deepStrictEqual(
  solution(5, [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [2, 1, 0, 1],
    [2, 2, 1, 1],
    [5, 0, 0, 1],
    [5, 1, 0, 1],
    [4, 2, 1, 1],
    [3, 2, 1, 1],
  ]),
  [
    [1, 0, 0],
    [1, 1, 1],
    [2, 1, 0],
    [2, 2, 1],
    [3, 2, 1],
    [4, 2, 1],
    [5, 0, 0],
    [5, 1, 0],
  ]
);
assert.deepStrictEqual(
  solution(5, [
    [0, 0, 0, 1],
    [2, 0, 0, 1],
    [4, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
    [3, 1, 1, 1],
    [2, 0, 0, 0],
    [1, 1, 1, 0],
    [2, 2, 0, 1],
  ]),
  [
    [0, 0, 0],
    [0, 1, 1],
    [1, 1, 1],
    [2, 1, 1],
    [3, 1, 1],
    [4, 0, 0],
  ]
);
