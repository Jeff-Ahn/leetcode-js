// 684. Redundant Connection
// Difficulty: Medium

/* Description */
// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

/* Constraints */
// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const parents = new Map();
  const n = edges.length;

  for (let i = 1; i <= n; i++) {
    parents.set(i, i);
  }

  let find = (node) => {
    let path = [];
    while (node !== parents.get(node)) {
      path.push(node);
      node = parents.get(node);
    }
    for (let n of path) {
      //path compression
      parents.set(n, node);
    }
    return node;
  };

  for (let edge of edges) {
    let parent1 = find(edge[0]),
      parent2 = find(edge[1]);
    if (parent1 === parent2) {
      return edge;
    }
    parents.set(parent2, parent1); // union
  }
};
