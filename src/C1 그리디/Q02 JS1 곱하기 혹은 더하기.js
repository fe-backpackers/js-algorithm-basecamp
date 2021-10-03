function solution(str) {
  return str.split("").reduce((acc, val) => {
    return acc * val === 0 ? acc + val : acc * val;
  });
}

const S = "02984";
console.log(solution(S));
