// 1313. Decompress Run-Length Encoded List
// Difficulty: Easy

/* Description */
// We are given a list nums of integers representing a list compressed with run-length encoding.

// Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

// Return the decompressed list.

/* Constraints */
// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const answer = [];
  while (nums.length) {
    const [freq, val] = nums;
    for (let i = 0; i < freq; i++) {
      answer.push(val);
    }
    nums = nums.slice(2);
  }

  return answer;
};
