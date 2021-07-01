// 128. Longest Consecutive Sequence
// Difficulty: Medium

/* Description */
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

/* Constraints */
// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let parent = {};
  let size = {};

  const UnionFind = function (nums) {
    for (let num of nums) {
      parent[num] = num;
      size[num] = 1;
    }

    this.find = (n) => {
      if (parent[n] === n) return n;
      parent[n] = this.find(parent[n]);
      return parent[n];
    };

    this.union = (m, n) => {
      const rootM = this.find(m);
      const rootN = this.find(n);

      // rank
      if (rootM === rootN) return;
      if (size[rootM] < size[rootN]) {
        size[rootN] += size[rootM];
        parent[rootM] = rootN;
      } else {
        size[rootM] += size[rootN];
        parent[rootN] = rootM;
      }
    };
  };

  const uf = new UnionFind(nums);

  for (let num of nums) {
    if (num - 1 in parent) {
      uf.union(num - 1, num);
    }
  }

  let max = 0;
  for (let num of nums) {
    max = Math.max(max, size[num]);
  }

  return max;
};

function longestConsecutive(nums) {
  let max = 0;
  const lens = {};

  for (let n of nums) {
    if (lens[n] != null) continue;

    const l = lens[n - 1] || 0; // left length
    const r = lens[n + 1] || 0; // right length

    const len = l + r + 1;

    // extend the length to the boundaries
    lens[n - l] = len;
    lens[n] = len;
    lens[n + r] = len;

    max = Math.max(max, len);
  }

  return max;
}
