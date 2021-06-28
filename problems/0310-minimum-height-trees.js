// 310. Minimum Height Trees
// Difficulty: Medium

/* Description */
// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

/* Constraints */
// 1 <= n <= 2 * 10^4
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (!edges || n < 2) return [0];
  const graph = [];
  // parse edges
  for (const [x, y] of edges) {
    graph[x] = graph[x] || [];
    graph[y] = graph[y] || [];
    graph[x].push(y);
    graph[y].push(x);
  }
  let leaves = [];
  // init leaf nodes
  graph.forEach((pts, i) => pts.length === 1 && leaves.push(i));
  while (n > 2) {
    n = n - leaves.length;
    const nxtLeaves = [];
    for (const leave of leaves) {
      // remove leaf node and itself in related nodes
      const tmp = graph[leave].pop();
      graph[tmp].splice(graph[tmp].indexOf(leave), 1);
      // save new leaf node
      graph[tmp].length === 1 && nxtLeaves.push(tmp);
    }
    leaves = nxtLeaves;
  }
  return leaves;
};
