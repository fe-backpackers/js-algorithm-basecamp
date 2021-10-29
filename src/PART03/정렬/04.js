function solution(input) {
  let [N, ...arr] = input.split("\n");
  N = Number(N);

  arr.sort((a,b) => a-b);
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
      sum += (N - 1) * arr[i];
    } else {
      sum += (N - i) * arr[i];
    }
  }
  return sum;
}

let input = `4
10
20
40
50`;

console.log(solution(input)); // 220