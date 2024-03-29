// 1282. Group the People Given the Group Size They Belong To
// Difficulty: Medium

/* Description */
// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].

// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

/* Constraints */
// groupSizes.length == n
// 1 <= n <= 500
// 1 <= groupSizes[i] <= n

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let indices = [],
    result = [];
  groupSizes.forEach((x, idx) => {
    if (indices[x]) indices[x].push(idx);
    else indices[x] = [idx];
    if (indices[x].length === x) {
      result.push(indices[x]);
      indices[x] = undefined;
    }
  });
  return result;
};
