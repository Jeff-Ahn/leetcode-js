// 646. Maximum Length of Pair Chain
// Difficulty: Medium

/* Description */
// You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

// A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

// Return the length longest chain which can be formed.

// You do not need to use up all the given intervals. You can select pairs in any order.

/* Constraints */
// n == pairs.length
// 1 <= n <= 1000
// -1000 <= lefti < righti < 1000

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  const n = pairs.length;
  const dp = new Array(n);

  pairs.sort((a, b) => a[0] - b[0]);
  const traverse = (index) => {
    if (dp[index]) return dp[index];
    if (index === pairs.length - 1) {
      dp[index] = 1;
    } else {
      let max = 0;
      for (let i = index + 1; i < n; i++) {
        if (pairs[index][1] < pairs[i][0]) max = Math.max(max, 1 + traverse(i));
      }
      dp[index] = max;
    }
    return dp[index];
  };
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, traverse(i));
  }
  return max;
};

var findLongestChain = function (pairs) {
  pairs.sort((a, b) => a[0] - b[0]);

  let dp = Array(pairs.length).fill(1),
    max = 0;

  //STARTING FROM END TO START
  for (let i = pairs.length - 1; i >= 0; i--) {
    let [a, b] = pairs[i];

    //FOR EACH ITERATE TILL END FOR EACH GREATER THAN CURRENT
    for (let j = i + 1; j < pairs.length; j++) {
      let [c, d] = pairs[j];

      if (c > b) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};
