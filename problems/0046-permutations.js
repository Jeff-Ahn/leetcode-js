// 46. Permutations
// Difficulty: Medium

/* Description */
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/* Constraints */
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = [];
  let cnt = nums.length;
  for (let i = 0; i < nums.length; i++) {
    used.push(false);
  }

  dfs(nums, [], result, used, cnt);
  return result;
};

var dfs = function (nums, arr, result, used, cnt) {
  if (cnt === 0) {
    result.push(arr);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    let nextArr = [...arr];
    nextArr.push(nums[i]);
    used[i] = true;

    dfs(nums, nextArr, result, used, cnt - 1);
    used[i] = false;
  }
};
