function splitUV(str) {
  let count = 0;
  let u = "";
  let v = "";
  for (let i = 0; i < str.length; i++) {
    str[i] === "(" ? count++ : count--;
    if (count === 0 && i !== 0) {
      u = str.slice(0, i + 1);
      v = str.slice(i + 1);
      return [u, v];
    }
  }
}

function checkPerfect(str) {
  let answer = false;
  str[0] === "(" && (answer = true);
  return answer;
}

function reverseStr(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      answer += ")";
    } else {
      answer += "(";
    }
  }
  return answer;
}

function solution(p) {
  let answer = "";
  const pLength = p.length;
  if (pLength === 0) return "";

  let [u, v] = splitUV(p);
  if (checkPerfect(u)) {
    answer = u + solution(v);
  } else {
    answer = "(" + solution(v) + ")" + reverseStr(u.slice(1, -1));
  }

  answer;
  return answer;
}

const p = "()))((()";

console.log(solution(p));
