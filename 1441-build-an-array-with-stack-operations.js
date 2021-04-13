// 1441. Build an Array With Stack Operations
// Difficulty: Easy

/* Description */
// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

// Build the target array using the following operations:

// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// Return the operations to build the target array. You are guaranteed that the answer is unique.

/* Constraints */
// 1 <= target.length <= 100
// 1 <= target[i] <= n
// 1 <= n <= 100
// target is strictly increasing.

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const answer = [];
  let start = 0;
  let end = target.length - 1;
  for (let i = 1; i <= n; i++) {
    answer.push('Push');
    if (target[start] === i) {
      start++;
      if (start > end) break;
      continue;
    }
    answer.push('Pop');
  }
  return answer;
};
