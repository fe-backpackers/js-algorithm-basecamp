# 알고리즘 트릭 모음

#### TOC

- [배열](#--)
  - [1차원 배열 생성](#1--------)
  - [2차원 배열 생성](#2--------)
  - [3차원 배열 생성](#3--------)
  - [배열 복사](#-----)
  - [정렬](#--)
- [DFS, BFS](#dfs--bfs)
  - [Nullish coalescing operator (??)](#nullish-coalescing-operator-----)
  - [Optional chaning (?.)](#optional-chaning----)
  - [x,y가 보드 범위를 벗어났는지 판단하기](#x-y-------------------)
  - [BFS 시간제한 우회하기](#bfs----------)
- [수학](#--)
  - [제곱](#--)
  - [순열](#--)
- [문자열](#---)
  - [아스키 코드로 계산 ('a' + 1 = 'b')](#-------------a----1----b--)
- [입력받기 (백준용)](#----------)
  - [`Mac, Linux`](#-mac--linux-)
  - [`Window`](#-window-)
- [기타](#--)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## 배열

### 1차원 배열 생성

```js
Array.from("x".repeat(5)); //[x,x,x,x,x]
Array.from("abcde"); // [a,b,c,d,e]
Array(5).fill(0); //[0,0,0,0,0]
```

### 2차원 배열 생성

```js
const arr = [[]];

// arr[5][2] (빈 배열 생성)
const arr1 = Array.from(Array(5), () => new Array(2));

// arr[5][2] (null로 초기화하여 생성)
// 주의! fill안에 object를 넣게 되면 참조를 그대로 복사하게 되어 각 배열이 공유하게 된다
const arr2 = Array.from(Array(5), () => Array(2).fill(null));

// map을 이용하는 방법
var myGrid = [...Array(6)].map((e) => Array(6));
```

### 3차원 배열 생성

```js
// arr[3][4][5]
const arr = [...Array(3)].map((arr) =>
  [...Array(4)].map((arr) => new Array(5).fill(0))
);
```

### 배열 복사

**얕은 복사**

```js
const arr = [1, 2, 3, 4, 5];
const copyed = [...arr];
const copyed2 = arr.slice();
```

**깊은 복사**

```js
const arr = [1, [2, 3, 4], { a: 5, b: 10 }];
const copyed = JSON.parse(JSON.stringify(arr));
```

### 정렬

숫자만 있는 배열에서는 간단하게 a-b하기

```js
const arr = [1, 23, 6, -5, 3, 2];
const sorted = arr.sort((a, b) => a - b);

// 주의! sort안에 함수 안 넣어주면 문자열로 정렬하기 때문에 결과가 이상함
arr.sort(); // [-5, 1, 2, 23, 3, 6]
```

문자열 배열에서는 삼항연산자 쓰거나 `localeCompare()` 쓰기

```js
const arr = ["zflip", "b", "arr", "cardmium", "qwer"];
const sorted1 = arr.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
const sorted2 = arr.sort((a, b) => a.localCompare(b));
```

## DFS, BFS

### Nullish coalescing operator (??)

@see [Nullish coalescing operator (??) MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)\
좌변이 _null_ 혹은 *undefined*인 경우 우변을 리턴한다.\
`||` 연산자와 다른 점: _0_, _''_ 등 falsy값들인 경우 리턴하는 값이 다름

```js
const foo = null ?? "default string";
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0
```

기본 값을 설정할때도 응용하여 사용 가능. @see [Logical nullish assignment (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

```js
const a = { duration: 50, title: "" };

a.duration ??= 10;
console.log(a.duration);
// expected output: 50

a.speed ??= 25;
console.log(a.speed);
// expected output: 25

a.title ||= "title is empty.";
console.log(a.title);
// expected output: "title is empty"
```

### Optional chaning (?.)

@see [Optional chaning (?.) MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)\
*undefined*나 *null*에 `.` 으로 접근할시 _Cannot read properties of~_ 에러가 떴었다.\
`?.`를 이용하면 에러 대신 undefined를 리턴한다. 값이 있다면 그 값을 리턴하고.

```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

### x,y가 보드 범위를 벗어났는지 판단하기

board[nx][ny] == 1 일때만 dfs를 돈다고 해보자.

**원래 쓰던 방법**

```js
for (let i = 0; i < 4; i++) {
  const [nx, ny] = [x + dx[i], y + dy[i]];
  if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
  if (board[nx][ny] !== 1) continue;
  dfs(nx, ny);
  // ...
}
```

**Optional chaning 이용**

```js
for (let i = 0; i < 4; i++) {
  const [nx, ny] = [x + dx[i], y + dy[i]];
  if (board[nx]?.[ny] !== 1) continue;
  dfs(nx, ny);
  // ...
}
```

### BFS 시간제한 우회하기

`shift()`, `reverse()`, `concat()` 연산자는 시간이 _O(n)_ 이다.
`push()`, `pop()` 은 _O(1)_.

BFS에서 queue를 shift하면 시간제한이 나는 예시:

```js
// FIXME shift() 시간복잡도가 O(n)이기때문에 시간초과가 난다
while (queue.length) {
  const cur = queue.shift();
  for (const nx of board[cur]) {
    if (dist[nx] > dist[cur] + 1) {
      dist[nx] = dist[cur] + 1;
      queue.push(nx);
    }
  }
}
```

시간제한 우회 방법 1. 포인터 이용:

```js
//   NOTE: shift()대신 ptr을 이용하여 시간초과를 해결함
let ptr = 0;
while (queue.length > ptr) {
  const cur = queue[ptr++];
  for (const nx of board[cur]) {
    if (dist[nx] > dist[cur] + 1) {
      dist[nx] = dist[cur] + 1;
      queue.push(nx);
    }
  }
}
```

시간제한 우회 방법 2. `reverse` 후 `pop()` (한번만 뒤집는 경우에)

```js
// FIXME: 시간초과 남
const queue = [1, 5, 2, 43, 7];
let cur;
while ((cur = queue.shift())) {
  console.log(cur);
}
```

```js
// NOTE: reverse()후 pop을 이용하여 시간초과를 해결함
const queue = [1, 5, 2, 43, 7];
const reversed_queue = queue.reverse();
let cur;
while ((cur = queue.pop())) {
  console.log(cur);
}
```

## 수학

### 제곱

```js
const a = 3 ** 4; // expected output: 81
const b = 10 ** -2; // expected output: 0.01
const c = Math.pow(4, 0.5); // expected output: 2
```

### 순열

**다음 순열**

```js
// 순열 맨끝이면 false, 다음순열이 있으면 true 리턴.
// 파라미터로 받은 arr을 수정한다!
const next_permutation = (arr) => {
  // TODO 1.arr을 배열(a) / 내림차순으로 정렬된 배열(b)로 나눈다.

  // 수열 A를 수열 앞(a)과 뒤(b)로 나눈다.(현재 수열: a의 맨 마지막 수열)
  // ex) 5,6,4,2 (a) / 7,3,1 (b)

  // 앞(a)의 마지막 숫자를 찾는다
  // 뒤(b)는 가장 마지막 수열 => 내림차순으로 정리되어있다!
  const LEN = arr.length;

  let i = LEN - 1;
  while (i > 0 && arr[i - 1] >= arr[i]) i--;
  if (i <= 0) return false; // 마지막 순열임

  // TODO 2.뒤(b)의 숫자중에서 arr[i-1]보다 큰 수 중 가장 작은 숫자를 찾는다.
  let j = LEN - 1;
  while (arr[j] <= arr[i - 1]) j--;

  // TODO 3. i와 j의 자리를 바꾸고, b를 뒤집는다
  [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
  j = LEN - 1;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  // 다음 수열이 있으니 true리턴
  return true;
};

const arr = [5, 6, 4, 2, 7, 3, 1];
console.log(next_permutation(arr), arr); // true, [5,6,4,3,1,2,7]
```

이전순열

다음기회에...

## 문자열

### 아스키 코드로 계산 ('a' + 1 = 'b')

C++처럼 아스키코드로 계산하는 방법

```js
const unicodeDistance = (a, b) => {
  return b.charCodeAt(0) - a.charCodeAt(0);
};

unicodeDistance("a", "c"); // 2
```

## 입력받기 (백준용)

```js
// dir에서 한줄씩 읽어오는 함수
const lineReader = (dir) => {
  const file = fs.readFileSync(dir, "utf8").split(/\r?\n/);
  let line = 0;
  return () => file[line++];
};
```

### `Mac, Linux`

맥, 리눅스는 *standard input*으로 받을 수 있다.

```js
// 사용법 예시
const solution = () => {
  const input = lineReader(0); // 콘솔로 입력받음
  const [n, m] = input().split(" ");
  const x = input();
};
```

### `Window`

윈도우는 맥이나 리눅스처럼 입력을 못 받는다.\
그래서 제너레이터를 사용하거나, input.txt를 만들어서 입력받아야 한다.

```js
// 사용법 예시
const solution = () => {
  const input = lineReader("./input.txt"); // 콘솔로 입력받음
  const [n, m] = input().split(" "); // input.txt를 한줄 읽어온다
};
```

## 기타

window에서 linux의 기능을 사용하고 싶다면 `WSL`을 이용한다.\
WSL로 파일 만들어놓고, 윈도우에서 vscode를 열어서 사용하면 된다.

---

+추가

- 팁 관련 함수들은 `lib/utils.js`에 작성함
- github wiki toc generator <https://ecotrust-canada.github.io/markdown-toc/>
