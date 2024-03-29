// 1690. Stone Game VII
// Difficulty: Medium

/* Description */
// Alice and Bob take turns playing a game, with Alice starting first.

// There are n stones arranged in a row. On each player's turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' values in the row. The winner is the one with the higher score when there are no stones left to remove.

// Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score's difference. Alice's goal is to maximize the difference in the score.

// Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally.

/* Constraints */
// n == stones.length
// 2 <= n <= 1000
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  // alice, bob
  let total = stones.reduce((acc, n) => acc + n, 0);
  let dp = Array.from({ length: stones.length }, () => Array(stones.length));
  let calculate = function (l, r, total) {
    if (l > r) return 0;
    if (dp[l][r] !== undefined) return dp[l][r];

    return (dp[l][r] = Math.max(
      total - stones[l] - calculate(l + 1, r, total - stones[l]),
      total - stones[r] - calculate(l, r - 1, total - stones[r])
    ));
  };

  return calculate(0, stones.length - 1, total);
};
