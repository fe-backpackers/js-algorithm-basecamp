/**
 * @name 거스름돈
 * @link 동빈북 예제 3-1
 * @date 2021-10-06
 * @ref https://www.codecademy.com/articles/getting-user-input-in-node-js
 * @author pyeonne
 */

"use strict";

const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("손님에게 거슬러 줘야 할 돈은 얼마인가?");

let coins = 0;

const coinTypes = [500, 100, 50, 10];

// 큰 단위의 화폐부터 차례대로 확인
for (let coin of coinTypes) {
  coins += Math.floor(n / coin); // 해당 화폐로 거슬러 줄 수 있는 동전의 갯수 세기
  n %= coin;
}

console.log(`거슬러 줘야 할 동전의 최소 개수: ${coins}`);
