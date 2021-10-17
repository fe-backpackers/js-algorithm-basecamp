/**
 * @name 괄호 변환
 * @link 동빈북 13-4
 * @date 2021-10-17
 * @ref https://programmers.co.kr/learn/courses/30/lessons/60058
 * @author sunmon
 */

function solution(p) {
  return getBalanced(p);
}

function getBalanced(p) {
  if (!p) return "";
  let left = 0;
  let u = "",
    v = "";
  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? left++ : left--;
    if (left === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  // u가 올바른 문자열인가?
  let isValid = true;
  for (let i = 0; i < u.length; i++) {
    u[i] === "(" ? left++ : left--;
    if (left < 0) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    return u + getBalanced(v);
  }

  let str = `(${getBalanced(v)})`;
  for (let i = 1; i < u.length - 1; i++) {
    str += u[i] === "(" ? ")" : "(";
  }
  return str;
}

console.log(solution("(()())()"));
