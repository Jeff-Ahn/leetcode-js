// 1791. Find Center of Star Graph
// Difficulty: Medium

/* Description */
// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

/* Constraints */
// 3 <= n <= 10^5
// edges.length == n - 1
// edges[i].length == 2
// 1 <= ui, vi <= n
// ui != vi
// The given edges represent a valid star graph.

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
  const map = new Map();
  edges.forEach(edge => {
      const [e1, e2] = edge;
      map.set(e1, map.get(e1) + 1 || 1);
      map.set(e2, map.get(e2) + 1 || 1);
  });
  let max = [0, 0];
  for (const [key, value] of map) {
      if (value > max[1]) max = [key, value];
  }
  return max[0];
};

/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
  return edges[0].find(edge => edges[1].includes(edge))
};