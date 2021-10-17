# DFS/BFS

> :bulb: 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정

## 내용

용어 정리

- `탐색` : 많은 양의 데이터 중 원하는 데이터를 찾는 과정
- `자료구조` : 데이터를 표현하고 관리하고 처리하기 위한 구조
- `오버플로우` : 데이터의 크기가 가득 찬 상태에서 삽입을 시도할때 발생
- `언더플로우` : 데이터가 없을때 (비어있을때) 삭제 연산을 수행할때 발생

### 자료구조

#### 스택

- FILO 구조 (선입후출). LIFO 구조 (후입선출)

#### 큐

- FIFO 구조 (선입선출)

### DFS/BFS

### 시간복잡도

큐와 스택을 어떻게 구현하느냐에 따라 시간복잡도가 달라진다.

Array로 구현하는 경우와 Linked List로 구현하는 경우.

Array는 연속적/ 고정적인 자료구조이므로 특정 원소에 접근할때 이점이 있고,\
Linked List는 불연속적인 자료구조이므로 맨 앞/뒤에 원소를 추가/삭제할때 이점이 있다.

**`시간복잡도 표`**

| 항목   | Array | Linked List |
| ------ | ----- | ----------- |
| search | O(n)  | O(n)        |
| lookup | O(n)  | O(n)        |
| push   | O(n)  | O(n)        |
| pop    | O(n)  | O(n)        |

**`자바스크립트 배열 메소드별 시간복잡도`**

| 항목    | Array | Linked List |
| ------- | ----- | ----------- |
| shift   | O(n)  | O(n)        |
| unshift | O(n)  | O(n)        |
| push    | O(n)  | O(n)        |
| pop     | O(n)  | O(n)        |
| reverse | O(n)  | O(n)        |
| join    | O(n)  | O(n)        |
| splice  | O(n)  | O(n)        |
| slice   | O(n)  | O(n)        |
| concat  | O(n)  | O(n)        |
| every   | O(n)  | O(n)        |
| some    | O(n)  | O(n)        |
| reduce  | O(n)  | O(n)        |
| ...     | O(n)  | O(n)        |

<br/>

### `Keyword`

구현 시 고려해야 할 사항

- 변수 범위
- 리스트 크기

### `Problems`

- 백준 Stack <https://www.acmicpc.net/problem/10828>
- 백준 Queue <https://www.acmicpc.net/problem/10845>
- 리트코드 ds <https://leetcode.com/study-plan/data-structure/?progress=9t0m1ys>
