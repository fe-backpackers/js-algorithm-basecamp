/**
 * @param start end 보다 작거나 같은 정수값
 * @param end start보다 크거나 같은 정수값
 * @returns [start, end) 인 정수의 배열
 */
export const range = (start, end, step = 1) => {
  const result = [];

  for (let i = start; i < end; i += step) {
    result.push(i);
  }

  return result;
};

/**
 * @description [start, end) 범위안에 정수가 포함되는지 확인하는 함수
 * @param i 확인의 대상이 되는 정수
 * @param start 범위의 시작값
 * @param end 범위의 끝값. end는 범위에 포함되지 않는다.
 * @returns i가 [start, end)에 포함되면 true, 포함되지 않으면 false
 */
export const isInRange = (i, start, end) => i >= start && i < end;

/**
 * @description 2차원 배열을 생성하는 함수
 * @param X 행의 개수(1차원)
 * @param Y 열의 개수(2차원)
 * @param value 2차원 배열 각 요소의 초기값으로, 기본값은 0이다.
 * @returns X행 Y열을 가지며 각 요소가 value로 초기화된 2차원 배열
 */
export const Array2D = (X, Y, value = 0) =>
  Array(X)
    .fill(0)
    .map(() => Array(Y).fill(value));

/**
 * @description 3차원 배열을 생성하는 함수
 * @param X 가로 행의 개수(1차원)
 * @param Y 세로 열의 개수(2차원)
 * @param Z 높이의 개수(3차원)
 * @param value 3차원 배열 각 요소의 초기값으로, 기본값은 0이다.
 * @returns X행 Y열 Z높이를 가지며 각 요소가 value로 초기화된 3차원 배열
 */
export const Array3D = (X, Y, Z, value = 0) =>
  Array(X)
    .fill(0)
    .map(() => Array2D(Y, Z, value));
