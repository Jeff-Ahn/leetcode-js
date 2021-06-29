// 399. Evaluate Division
// Difficulty: Medium

/* Description */
// You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string that represents a single variable.

// You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.

// Return the answers to all queries. If a single answer cannot be determined, return -1.0.

// Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.

/* Constraints */
// 1 <= equations.length <= 20
// equations[i].length == 2
// 1 <= Ai.length, Bi.length <= 5
// values.length == equations.length
// 0.0 < values[i] <= 20.0
// 1 <= queries.length <= 20
// queries[i].length == 2
// 1 <= Cj.length, Dj.length <= 5
// Ai, Bi, Cj, Dj consist of lower case English letters and digits.

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const neighbours = equations.reduce((acc, eq, index) => {
    const edge = [eq[1], values[index]];
    const reverseEdge = [eq[0], 1 / values[index]];
    if (acc[eq[0]] == null) {
      acc[eq[0]] = [edge];
    } else {
      acc[eq[0]].push(edge);
    }
    if (acc[eq[1]] == null) {
      acc[eq[1]] = [reverseEdge];
    } else {
      acc[eq[1]].push(reverseEdge);
    }

    return acc;
  }, {});

  return queries.map((q) => evaluate(q, neighbours));
};

const evaluate = (query, neighbors) => {
  const [nom, denom] = query;
  if (!(nom in neighbors) || !(denom in neighbors)) return -1;
  if (nom === denom) return 1;

  const queue = [...neighbors[nom]];
  const visited = new Set();

  while (queue.length) {
    const [variable, value] = queue.shift();

    if (variable === denom) return value;
    visited.add(variable);

    const next = neighbors[variable];
    next.forEach(([next, nextValue]) => {
      if (visited.has(next)) return;
      queue.push([next, nextValue * value]);
    });
  }

  return -1;
};
