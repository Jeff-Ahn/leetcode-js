// 743. Network Delay Time
// Difficulty: Medium

/* Description */
// You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.

// We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

/* Constraints */
// 1 <= k <= n <= 100
// 1 <= times.length <= 6000
// times[i].length == 3
// 1 <= ui, vi <= n
// ui != vi
// 0 <= wi <= 100
// All the pairs (ui, vi) are unique. (i.e., no multiple edges.)

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = new Array(n + 1)
    .fill(null)
    .map((_) => new Array(n + 1).fill(Infinity));

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  times.forEach((time) => {
    const [from, to, cost] = time;
    graph[from][to] = cost;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
  return graph[k].slice(1).some((cost) => cost >= Infinity)
    ? -1
    : Math.max(...graph[k].slice(1));
};
