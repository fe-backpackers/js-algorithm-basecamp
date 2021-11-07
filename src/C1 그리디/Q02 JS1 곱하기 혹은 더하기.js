function solution(str) {
  return str.split("").reduce((acc, val) => {
    return Number(acc) * Number(val) < Number(acc) + Number(val)
      ? Number(acc) + Number(val)
      : Number(acc) * Number(val);
  });
}

const S = "123";
console.log(solution(S));
