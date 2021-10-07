//모험가 길드
export function countMinimumGroups(n) {
  let total = 0;
  let countMember = 0;
  n.sort((a, b) => a - b);

  n.forEach((fear) => {
    //console.log("feat", fear);
    countMember++; //반복되면 여기서 올려줌!

    if (fear <= countMember) {
      total++; //그룹수 추가하고
      countMember = 0; //반복 끝나면 0으로
    }
  });
  return total;
}

//makeMaxNumber

export function makeMaxNumber(str) {
  const input = str.split("").map((val) => +val);

  input.reduce((acc, num) => {
    if ((num < 2) | (acc < 2)) {
      acc += num;
    } else {
      acc *= num;
    }
    console.log("합", acc);
    return acc;
  }, 0);
}
