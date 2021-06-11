// 486. Predict the Winner
// Difficulty: Medium

/* Description */
// You are given an integer array nums. Two players are playing a game with this array: player 1 and player 2.

// Player 1 and player 2 take turns, with player 1 starting first. Both players start the game with a score of 0. At each turn, the player takes one of the numbers from either end of the array (i.e., nums[0] or nums[nums.length - 1]) which reduces the size of the array by 1. The player adds the chosen number to their score. The game ends when there are no more elements in the array.

// Return true if Player 1 can win the game. If the scores of both players are equal, then player 1 is still the winner, and you should also return true. You may assume that both players are playing optimally.

/* Constraints */
// 1 <= nums.length <= 20
// 0 <= nums[i] <= 10^7

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
  const cache = {};
  const helper = (start, end) => {
    const key = `${start},${end}`;
    if (cache[key]) return cache[key];
    if (start > end) return 0;
    if (start === end) return nums[start];

    const case1 = nums[start] - helper(start + 1, end);
    const case2 = nums[end] - helper(start, end - 1);
    cache[key] = Math.max(case1, case2);
    return cache[key];
  };
  return helper(0, nums.length - 1) >= 0;
};
