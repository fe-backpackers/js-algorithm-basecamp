function solution(s) {
  const nums = s.split("").map((v) => +v);
  let answer = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num > 1) answer *= num;
    else answer += num;
  }
  return answer;
}

console.log(solution("567"));
