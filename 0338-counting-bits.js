// 338. Counting Bits
// Difficulty: Medium

/* Description */
// Given an integer num, return an array of the number of 1's in the binary representation of every number in the range [0, num].

/* Constraints */
// 0 <= num <= 10^5

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [0];

  const power = Math.floor(Math.log2(num)) + 1;

  for (let i = 0; i < power; i++) {
    result.push(...result.map((v) => v + 1));
  }

  return result.slice(0, num + 1);
};

const countBits = (num) => {
  let dp = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) dp[i] = dp[i >> 1] + (i & 1);
  return dp;
};

var countBits = function (num) {
  let A = new Array(num + 1);
  A[0] = 0;
  for (let i = 1; i < A.length; i++) {
    A[i] = A[Math.floor(i / 2)] + (i % 2);
  }
  return A;
};
