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
 * @summary 콘솔에서 한 줄씩 입력받아 generator 안에 넣어주는 함수. {string}
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
 * @summary 파라미터로 받은 모든 수의 합을 구해 리턴한다
 * @param {array} 더할 수
 * @return {Number} 수의 합
 * @usage utils.sum(1,2,3,4)
 */
exports.sum = (...nums) => {
  return nums.reduce((prev, cur) => prev + cur, 0);
};
