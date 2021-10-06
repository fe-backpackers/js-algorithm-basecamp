function solution(str) {
  let count0 = 0;
  let count1 = 0;
  let num = str[0];
  num === "1" ? count0++ : count1++;

  for (let i = 0; i < str.length - 1; i++) {
    console.log(i);
    console.log(str[i]);
    if (str[i] !== str[i + 1]) {
      str[i] === "1" ? count0++ : count1++;
    }
  }
  console.log(count0);
  console.log(count1);

  return Math.min(count0, count1);
}

console.log(solution("0001100"));
// console.log(solution("1110011"));

// 내 생각
// function solution(str) {
// 	let count0 = 0;
// 	let count1 = 0;
// 	let num = str[0];
// 	num === "1" ? count0++ : count1++;

// 	for (let i = 0; i < str.length; i++) {
// 		console.log(i);
// 		// console.log(num)
// 		console.log(str[i]);
// 		if (num !== str[i]) {
// 			console.log(i);
// 			console.log(str[i]);

// 			if (str[i] === "0") {
// 				// num = str[i];
// 				count0++;
// 			} else {
// 				// num = str[i];
// 				count1++;
// 			}
// 			num = str[i];
// 		}
// 	}
// 	console.log(count0);
// 	console.log(count1);

// 	return Math.min(count0, count1);
// }
