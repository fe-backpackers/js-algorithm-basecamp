/**
 * @summary 알고리즘 풀이에 사용되는 유틸리티 함수 모음
 * @author sunmon
 * @see https://nodejs.org/api/fs.html#fs_file_system
 */

const fs = require("fs");
const fsPromises = require("fs/promises");
const readline = require("readline");

/**
 * @param {string} dir 읽을 파일 경루
 * @return {arrray[string]} 파일의 한 문장씩을 담은 문자열 배열
 */
exports.inputByFile = async (dir) => {
  const file = await fsPromises.readFile(dir, "utf-8");
  return file.split(/\r?\n/); // window & mac
};

/**
 * @param {string} dir 읽을 파일 경로
 * @return {string} line 파일에서 순차적으로 한 줄씩 읽은 것
 * @example
 *  const reader = exports.lineReader("input.txt");
    console.log(reader()); // 한줄씩 읽어온다
 */
exports.lineReader = (dir) => {
  const file = fs.readFileSync(dir, "utf8").split(/\r?\n/);
  let line = 0;
  return () => file[line++];
};

/**
 * @description 콘솔에서 한 줄씩 입력받아 generator 안에 넣어주는 함수. {string}
 * @param {generator} solution 함수. yield로 input을 건네받는다
 * @return {void}
 * @see https://www.codecademy.com/articles/getting-user-input-in-node-js
 * @usage readConsole(generatorExample)
 * @example generatorExample 함수 참고
 */
exports.readConsole = (generator) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const gen = generator();
  gen.next(); // to wait console input

  rl.on("line", (line) => {
    if (gen.next(line).done) rl.close();
  });
};

const generatorExample = function* () {
  const n = yield; // 콘솔에서 입력받은 한 줄 저장
  const m = yield; // 콘솔에서 입력받은 한 줄 저장
  return Number(n) + Number(m);
};

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
