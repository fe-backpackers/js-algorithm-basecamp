function solution(s) {
  var answer = [];
  console.log(s.split(""));
  s = s.split("");
  console.log(s.length);
  let sLength = s.length;
  if (sLength == 1) {
    return 1;
  }
  for (let i = 1; i <= sLength / 2; i++) {
    let sDuplicateArr = Array.from(s);
    for (let j = Math.ceil(sLength / i - 1); j > 0; j--) {
      sDuplicateArr.splice(i * j, 0, " ");
    }
    console.log(sDuplicateArr.join("").split(" "));
    sDuplicateArr = sDuplicateArr.join("").split(" ");
    sDuplicateArr.push("");
    let count = 1;
    sDuplicateArr.reduce((acc, val, idx) => {
      acc === val
        ? (count++, (sDuplicateArr[idx - 1] = ""))
        : count != 1
        ? ((sDuplicateArr[idx - 2] = count), (count = 1))
        : 0;

      return val;
    });
    sDuplicateArr = sDuplicateArr.join("");
    answer.push(sDuplicateArr.length);
  }

  return Math.min.apply(null, answer);
}
const s = "abcabcab";
// const s = "abcabcabcabcdededededede";
console.log(solution(s));
