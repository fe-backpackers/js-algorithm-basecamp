# js-algorithm-basecamp

## 스터디 기간

2021-09-27 Mon ~ 2021-12-05 Sun / 12주간

---

## 스터디 목표

- 해당 스터디는 모든 알고리즘을 정복하는 것을 목표로 하지 않습니다.

- **자신만의 알고리즘 문제 풀이 베이스캠프**를 만드는 것이 목표입니다.

---

## 자신만의 알고리즘 문제 풀이 베이스캠프란 무엇인가요?

- 베이스 캠프의 사전적 의미: 산이나 탐험을 할 때에 근거지로 삼는 고정 천막

- 알고리즘 이라는 높은 산을 오를 때, 항상 참고할 수 있는 근거지를 만들자는 뜻입니다.

- 즉, 앞으로 알고리즘을 학습하면서 항상 참고할 수 있는 **나만의 개념집, 코딩 팁, 정리 노트**와 같은 개념입니다.

---

## 어떻게 베이스캠프를 만드나요?

- JS에서는 다른 언어에 비해 PS용 내장 자료구조와 라이브러리가 부족합니다. (큐, 순열, 조합 기능 부재 등)

- 따라서 **PS에 필요한 내장 자료구조 및 라이브러리가 있다면 직접 작성합니다.**

  - 반드시 새로운 자료구조를 반드시 만들 필요가 없습니다. 기존의 자료구조로 필요한 자료구조를 흉내낼 수 있다면 그러한 접근법을 기록합니다.(참고: [스택/큐/덱](https://github.com/bigsaigon333/boj-with-js/blob/main/docs/stack_queue_deque.md))

- 각 알고리즘에 대한 개념, 자신만의 접근법 등을 기록합니다.(참고: [구현 알고리즘](https://github.com/bigsaigon333/js-for-coding-test/blob/main/docs/04-%EA%B5%AC%ED%98%84.md))

---

## 스터디 진행방법

- **이것이 취업을 위한 코딩 테스트다 with 파이썬(이하, "이코테")** 을 **교재**로 사용합니다.
- **이코테 'PART 02 주요 알고리즘 이론과 실전 문제'** 의 각 Chapter를 **매주 학습**합니다.
- **이코테 'PART 03 알고리즘 유형별 기출문제'** 의 각 Chapter를 **매주 풀이**합니다.
- 3주 학습 후 1주간의 버퍼기간이 있습니다. 학습이 밀린 알고리즘을 학습하거나, 기존에 배운 알고리즘을 복습하는 기간입니다.
- 예시) 1주차: 그리디 알고리즘

  - 이코테 'PART 02 CHAPTER 03 그리디': 이론 학습 및 예제, 실전 문제 풀기
  - 이코테 'PART 03 CHAPTER 11 그리디 문제': 문제 풀기

---

### 주차별 학습할 알고리즘

| 주차 |      알고리즘       | 이코테 PART 02 | 이코테 PART 03 |
| :--: | :-----------------: | :------------: | :------------: |
|  1   |       그리디        |   CHAPTER 03   |   CHAPTER 11   |
|  2   |        구현         |   CHAPTER 04   |   CHAPTER 12   |
|  3   |       DFS/BFS       |   CHAPTER 05   |   CHAPTER 13   |
|  4   |      버퍼 (\*)      |      N/A       |      N/A       |
|  5   |        정렬         |   CHAPTER 06   |   CHAPTER 14   |
|  6   |      이진 탐색      |   CHAPTER 07   |   CHAPTER 15   |
|  7   | 다이나믹 프로그래밍 |   CHAPTER 08   |   CHAPTER 16   |
|  8   |      버퍼 (\*)      |      N/A       |      N/A       |
|  9   |      최단 경로      |   CHAPTER 09   |   CHAPTER 17   |
|  10  |     그래프 이론     |   CHAPTER 10   |   CHAPTER 18   |

(\*) 버퍼 기간은 밀린 알고리즘을 학습하거나 복습하는 기간입니다.
반드시 해당 주차에 버퍼를 가질 필요 없이, 각자의 사정에 맞추어서 버퍼를 가지시면 됩니다.
즉, 4주의 기간동안 3가지 알고리즘을 학습한다고 생각하면 되겠습니다.

---

## 스터디 진행전 완료해야할 사항

- 이코테 책을 준비합니다
- [github repo](https://github.com/js-for-algorithm/js-for-coding-test) 를 fork합니다
- 첫주차 Pull Request를 보냅니다

---

## 구체적인 학습 방법

### fork한 repository의 `README.md` 에 각 주차에 학습할 알고리즘명을 기재한 후, Pull Request를 보냅니다

- 학습시작과 동시에 PR을 보냅니다. 학습을 하면서 commit & push한 내용이 모두 PR에 자동으로 추가됩니다. 따라서 학습 진행상황을 다른 스터디원과 실시간으로 공유할 수 있습니다.
- upstream repository의 각자의 브랜치에 Pull Request를 보냅니다([예시](https://github.com/js-for-algorithm/js-algorithm-basecamp/pull/1))

### 알고리즘을 학습합니다

- 매주 해당 알고리즘의 이론(이코테 PART 02)을 학습합니다
  - 모든 예제/실전문제를 모두 풉니다.
- 매주 해당 알고리즘의 실전 문제(이코테 PART 03)를 풉니다
  - 반드시 모든 문제를 풀 필요는 없습니다.
  - BOJ, programmers 등 이코테 PART 03이 아닌 다른 문제를 풀어도 상관없습니다.

### 학습한 내용을 정리합니다

- 알고리즘 이론 정리, 자신만의 알고리즘 접근법/풀이법 정리, JS에 없는 자료구조 사용법, 이코테 예제/실전문제의 JS 풀이 등을 github, 개인 블로그, notion 등 공개할 수 있는 곳에 정리합니다.

### 각자의 `README.md` 에 학습한 사항 및 정리한 내용의 링크를 추가한 후 commit & push 합니다

- 자신이 정리한 내용을 다른 스터디원이 자신의 PR에서 열람할 수 있도록 합니다.([예시](https://github.com/bigsaigon333/js-algorithm-basecamp#%EC%9D%B4%EC%BD%94%ED%85%8C-part-02-3%EC%9E%A5-%EA%B7%B8%EB%A6%AC%EB%94%94))
- 예시에서는 github 를 사용하였으나, 개인 블로그, notion 등 자유롭게 하셔도 상관없습니다.

### 다른 스터디원의 정리한 내용에 대해 질문, 의견 공유, 피드백합니다

- 다른 스터디원의 내용을 보면서 더 많은 인사이트를 얻을 수 있습니다.
- 회고 시간에 서로의 PR을 리뷰하는 시간이 있으니, 자율적으로 수행합니다.

### 모르는 사항은 질문합니다

- 디스코드에 질문을 남겨도 좋고, PR에 comment를 남겨도 좋습니다.
- PR에 comment를 남기더라도 디스코드에서 한번더 말씀해주시면 더 빨리 답변 드릴수 있습니다.
- 다른 스터디원의 질문에 답변합니다.

  - 질문에 답변하는 것은 최고의 학습 방법 중 하나입니다.

### 매주 1회 회고 시간을 갖습니다

- 회고는 매주 일요일 22:00 디스코드에서 진행합니다.

1. 2인이 1조가 되어 서로의 PR을 리뷰합니다.

- 페어는 매번 참석한 인원중에서 랜덤으로 정해집니다. 즉, 매주 페어가 변경됩니다.
- PR 리뷰란 상대방이 정리한 이론 내용을 보면서 모르는 걸 물어보거나 자신의 아이디어 공유, 공통으로 푼 문제 접근방법에 대한 논의 등을 총칭합니다.
- PR을 리뷰하며 다른 스터디원의 정리한 내용에 대해 질문, 의견 공유, 피드백합니다.

2. 다같이 한 주 스터디하면서 느꼈던 점에 대하여 회고합니다. 스터디 방식에 대해 제안할 점이 있으면 의견을 남기고 제안합니다.

- github discussion을 이용합니다.

### 회고가 끝나면 PR을 merge 합니다

---

## FAQ

### 저는 파이썬을 하나도 모르는데 괜찮을까요?

- **답변 1.** 파이썬 자체가 굉장히 읽기가 편하고, 함수명이 직관적이라고 생각합니다. 그래서 이코테 책에 있는 파이썬 기본 문법과 [파이썬 기본 문법에 대한 동빈나 강의](https://youtu.be/m-9pAwq1o3w) 만 듣는다면, 이코테 책에 있는 파이썬 코드 읽기에 크게 문제는 없다고 생각합니다. 또한, 이코테 책에서 파이썬 코드 중간중간에 주석이 있어서 흐름 파악하는 것이 어렵지 않습니다.

- **답변 2.** 저희 스터디 목표가 파이썬 코드를 이해해서 JS로 다시 써본다가 아니기 때문에, 파이썬 코드를 전혀 참고하지 않고, 그냥 자기 나름대로 JS로 풀어보는 것도 좋다고 생각합니다. 알고리즘 학습은 어떻게 접근하는지가 80% 이상이라고 생각합니다. 알고리즘 접근법은 언어와 상관없이 동일합니다. 다만 언어에 따라서 알고리즘 구현의 난이도가 달라질 뿐입니다. 이코테 책과 강의를 그냥 알고리즘을 어떻게 접근하면 좋을지에 대한 가이드로만 생각하는 것도 괜찮은 것 같습니다.

- **결론:** 서점에 가셔서 책 한번 보시고 결정하시는 것도 좋을거 같아요 👍

### 이코테 책의 파이썬 코드와 동일하게 풀어야 하나요?

- 이코테 책에 있는 풀이와 반드시 동일하게 문제를 풀 필요는 없습니다. 자신만의 풀이법을 만들어 가는 것이 이번 스터디의 목표입니다. 다른 스터디원과의 의견 공유로 자신만의 풀이법을 더욱 견고히 만들어갑시다.

## 파일 구분

1. C1 그리디
2. C2 구현
3. C3 DFS/BFs
4. C4 정렬
5. C5 이진탐색
6. C6 다이나믹 프로그래밍
7. C7 최단 경로
8. C8 그래프 이론

- 실전문제 P
- 기출문제 Q

- 난이도 JS 1~5

## 알고리즘 종류

1. 그리디
