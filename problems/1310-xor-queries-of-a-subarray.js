// 1310. XOR Queries of a Subarray
// Difficulty: Medium

/* Description */
// Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri], for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ). Return an array containing the result for the given queries.

/* Constraints */
// 1 <= arr.length <= 3 * 10^4
// 1 <= arr[i] <= 10^9
// 1 <= queries.length <= 3 * 10^4
// queries[i].length == 2
// 0 <= queries[i][0] <= queries[i][1] < arr.length

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const xor = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    xor[i] = xor[i - 1] ^ arr[i];
  }

  return queries.map((query) => {
    const [left, right] = query;
    return xor[right] ^ (xor[left - 1] ?? 0);
  });
};
