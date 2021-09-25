/**
 * @param start end 보다 작거나 같은 정수값
 * @param end start보다 크거나 같은 정수값
 * @returns [start, end) 인 정수의 배열
 */
export const range = (start, end) =>
  Array(end - start)
    .fill(0)
    .map((_, i) => start + i);

/**
 * @description [start, end) 범위안에 정수가 포함되는지 확인하는 함수
 * @param i 확인의 대상이 되는 정수
 * @param start 범위의 시작값
 * @param end 범위의 끝값. end는 범위에 포함되지 않는다.
 * @returns i가 [start, end)에 포함되면 true, 포함되지 않으면 false
 */
export const isInRange = (i, start, end) => i >= start && i < end;

