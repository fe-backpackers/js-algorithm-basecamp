function solution(n, point) {
  let scoreArray = [];
  point.forEach((val) => {
    const [name, k, e, m] = val.split(" ");
    console.log(k);
    scoreArray.push({
      name,
      korean: Number(k),
      english: Number(e),
      math: Number(m),
    });
  });
  scoreArray.sort((a, b) => {
    if (a.korean > b.korean) return -1;
    if (a.korean < b.korean) return 1;
    if (a.english > b.english) return 1;
    if (a.english < b.english) return -1;
    if (a.math > b.math) return -1;
    if (a.math < b.math) return 1;
  });
  return scoreArray.map((val) => val.name);
}

const n = 12;
const point = [
  "Junkyu 50 60 100",
  "Sangkeun 80 60 50",
  "Sunyoung 80 70 100",
  "Soong 50 60 90",
  "Haebin 50 60 100",
  "Kangsoo 60 80 100",
  "Donghyuk 80 60 100",
  "Sei 70 70 70",
  "Wonseob 70 70 90",
  "Sanghyun 70 70 80",
  "nsj 80 80 80",
  "Taewhan 50 60 90",
];

console.log(solution(n, point));
