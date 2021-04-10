// 932. Beautiful Array
// Difficulty: Medium

/* Description */
// For some fixed N, an array A is beautiful if it is a permutation of the integers 1, 2, ..., N, such that:

// For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

// Given N, return any beautiful array A.  (It is guaranteed that one exists.)

/* Note */
// 1 <= N <= 1000

/**
 * @param {number} N
 * @return {number[]}
 */
var beautifulArray = function (N) {
  const cache = new Map();

  const find = (n) => {
    if (cache.has(n)) return cache.get(n);
    if (n === 1) return [1];

    const arr = [];
    const leftHalf = find(Math.floor((n + 1) / 2));
    const rightHalf = find(Math.floor(n / 2));

    for (let num of leftHalf) {
      arr.push(num * 2 - 1);
    }
    for (let num of rightHalf) {
      arr.push(num * 2);
    }

    cache.set(n, arr);
    return arr;
  };

  return find(N);
};
