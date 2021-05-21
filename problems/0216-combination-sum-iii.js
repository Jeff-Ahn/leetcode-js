// 216. Combination Sum III
// Difficulty: Medium

/* Description */
// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

/* Constraints */
// 2 <= k <= 9
// 1 <= n <= 60

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const answer = [];
  const used = new Array(10).fill(false);

  const dfs = (level, prev, arr = [], sum) => {
    if (level === k) {
      if (sum === n) answer.push(arr);
      return;
    }

    for (let i = prev + 1; i <= 9; i++) {
      dfs(level + 1, i, arr.concat([i]), sum + i);
    }
  };
  dfs(0, 0, [], 0);
  return answer;
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const arr = [];
  for (let i = 1; i <= 9; i++) arr.push(i);

  const result = [];

  const dfs = (i, arr, k, n, slate) => {
    // backtrack case
    if (n < 0) return;

    // basecase
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
    }

    // dfs recursive case
    for (let j = i; j < arr.length; j++) {
      slate.push(arr[j]);
      dfs(j + 1, arr, k, n - arr[j], slate);
      slate.pop();
    }
  };

  dfs(0, arr, k, n, []);
  return result;
};
