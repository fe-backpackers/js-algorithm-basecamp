function solution(s) {
  const reg1 = /[A-Z]/g; // /\d/g;
  const reg2 = /[0-9]/g; // /\D/g;
  const str = s.match(reg1).sort();
  const num = s.match(reg2).reduce((acc, val) => Number(acc) + Number(val));

  return [...str].join("") + num;
}

const s = "K1KA5CB7";
console.log(solution(s));
