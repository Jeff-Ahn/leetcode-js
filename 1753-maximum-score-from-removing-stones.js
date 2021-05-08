// 1753. Maximum Score From Removing Stones
// Difficulty: Medium

/* Description */
// You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively. Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score. The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).

// Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.

/* Constraints */
// 1 <= a, b, c <= 10^5

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  const nums = [a, b, c].sort((a, b) => a - b);
  let answer = 0;

  while (nums[1] > 0) {
    let diff = nums[1] - nums[0];
    if (diff === 0) {
      diff = 1;
    }
    answer += diff;
    nums[1] -= diff;
    nums[2] -= diff;

    nums.sort((a, b) => a - b);
  }
  return answer;
};
