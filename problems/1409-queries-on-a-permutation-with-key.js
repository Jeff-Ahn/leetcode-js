// 1409. Queries on a Permutation With Key
// Difficulty: Medium

/* Description */
// Given the array queries of positive integers between 1 and m, you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules:

// In the beginning, you have the permutation P=[1,2,3,...,m].
// For the current i, find the position of queries[i] in the permutation P (indexing from 0) and then move this at the beginning of the permutation P. Notice that the position of queries[i] in P is the result for queries[i].
// Return an array containing the result for the given queries.

/* Constraints */
// 1 <= m <= 10^3
// 1 <= queries.length <= m
// 1 <= queries[i] <= m

/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  const result = [];
  const p = Array.from({ length: m }, (_, idx) => idx + 1);

  queries.forEach((query) => {
    const index = p.indexOf(query);
    result.push(index);
    const target = p.splice(index, 1)[0];
    p.unshift(target);
  });

  return result;
};
