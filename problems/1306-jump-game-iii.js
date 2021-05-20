// 1306. Jump Game III
// Difficulty: Medium

/* Description */
// Given an array of non-negative integers arr, you are initially positioned at start index of the array. When you are at index i, you can jump to i + arr[i] or i - arr[i], check if you can reach to any index with value 0.

// Notice that you can not jump outside of the array at any time.

/* Constraints */
// 1 <= arr.length <= 5 * 10^4
// 0 <= arr[i] < arr.length
// 0 <= start < arr.length

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length;
  const dp = new Array(n).fill(false);

  const dfs = (idx) => {
    if (dp[idx] || idx < 0 || idx >= n) return;
    dp[idx] = true;
    dfs(idx - arr[idx]);
    dfs(idx + arr[idx]);
  };

  dfs(start);
  return dp.some((v, idx) => v && arr[idx] === 0);
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  return depthFirstSearch(arr, start, 0);
};

const depthFirstSearch = (arr, start, count) => {
  if (start < 0 || start > arr.length - 1) return false;
  if (count > arr.length) return false;
  if (arr[start] === 0) return true;

  count += 1;
  return (
    depthFirstSearch(arr, start + arr[start], count) ||
    depthFirstSearch(arr, start - arr[start], count)
  );
};
