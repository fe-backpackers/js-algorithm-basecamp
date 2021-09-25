/**
 * @param start end 보다 작거나 같은 정수값
 * @param end start보다 크거나 같은 정수값
 * @returns [start, end) 인 정수의 배열
 */
export const range = (start, end) =>
  Array.from({ length: end - start }, (_, i) => start + i);
