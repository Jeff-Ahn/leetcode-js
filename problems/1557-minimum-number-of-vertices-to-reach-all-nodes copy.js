// 1557. Minimum Number of Vertices to Reach All Nodes
// Difficulty: Medium

/* Description */
// Given a directed acyclic graph, with n vertices numbered from 0 to n-1, and an array edges where edges[i] = [fromi, toi] represents a directed edge from node fromi to node toi.

// Find the smallest set of vertices from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

// Notice that you can return the vertices in any order.

/* Constraints */
// 2 <= n <= 10^5
// 1 <= edges.length <= min(10^5, n * (n - 1) / 2)
// edges[i].length == 2
// 0 <= fromi, toi < n
// All pairs (fromi, toi) are distinct.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const noInVertexes = new Set([...Array(n).keys()]);
  for (const [u, v] of edges) {
    noInVertexes.delete(v);
  }
  return Array.from(noInVertexes);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  const degree = Array(n).fill(0);
  const output = [];
  edges.forEach(([u, v]) => degree[v]++);
  degree.forEach((deg, i) => !deg && output.push(i));
  return output;
};
