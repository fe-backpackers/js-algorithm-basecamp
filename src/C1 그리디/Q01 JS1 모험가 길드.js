function solution(guild) {
  guild.sort((a, b) => a - b);
  console.log(guild);
  let result = 0;
  let count = 0;
  guild.forEach((val) => {
    count++;
    if (val <= count) {
      result++;
      count = 0;
    }
  });
  return result;
}

const guild = [2, 3, 1, 2, 2];
console.log(solution(guild));
