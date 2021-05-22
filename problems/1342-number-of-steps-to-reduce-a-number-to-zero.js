// 1342. Number of Steps to Reduce a Number to Zero
// Difficulty: Easy

/* Description */
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

/* Constraints */
// 0 <= num <= 10^6

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let cnt = 0;
  while (num !== 0) {
    if (num % 2) num -= 1;
    else num = num >> 1;
    cnt++;
  }
  return cnt;
};
