# JS

> :bulb: 자바스크립트의 자료형, 메모리, 함수 등 개념과 동작 원리를 정리하는 문서

### 데이터 타입

기본형(원시형, primitive type) 과 참조형 (reference type) 으로 구성.

- 기본형 : number, string, boolean, null, undefined, (ES6) symbol
- 참조형: object, Array, Function, Date, RegExp, (ES6) Map, WeakMap, Set, WeakSet

기본형은 **불변성**을 띈다

- C, C++ 등 : int, short, long 등 숫자에 할당하는 메모리의 크기를 정해둠
- Javascript
  - 숫자는 모두 8 byte (1bit 정수부 + 11 bit 지수부 + 52bit 가수부)
  - 문자열은 정해진 규격 X. 메모리 용량이 가변적.
