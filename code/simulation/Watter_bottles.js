/**
 * @name Watter bottles
 * @link https://leetcode.com/problems/water-bottles/
 * @date 2021-10-10
 * @author sunmon
 * @difficulty easy
 */

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let drink = numBottles;
  while (numBottles >= numExchange) {
    const fullBottles = parseInt(numBottles / numExchange);
    drink += fullBottles;
    numBottles = fullBottles + (numBottles % numExchange);
  }

  return drink;
};
