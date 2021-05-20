// 1319. Number of Operations to Make Network Connected
// Difficulty: Medium

/* Description */
// There are n computers numbered from 0 to n-1 connected by ethernet cables connections forming a network where connections[i] = [a, b] represents a connection between computers a and b. Any computer can reach any other computer directly or indirectly through the network.

// Given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected. Return the minimum number of times you need to do this in order to make all the computers connected. If it's not possible, return -1.

/* Constraints */
// 1 <= n <= 10^5
// 1 <= connections.length <= min(n*(n-1)/2, 10^5)
// connections[i].length == 2
// 0 <= connections[i][0], connections[i][1] < n
// connections[i][0] != connections[i][1]
// There are no repeated connections.
// No two computers are connected by more than one cable.

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  const parent = Array.from({ length: n }, (_, idx) => idx);
  let setCount = n;
  let sameParentCount = 0;

  const getParent = (x) => {
    if (parent[x] === x) return x;
    return getParent(parent[x]);
  };

  const union = (a, b) => {
    const aParent = getParent(a);
    const bParent = getParent(b);

    if (aParent === bParent) {
      sameParentCount++;
      return;
    }

    if (aParent < bParent) {
      parent.forEach((p, idx) =>
        p === bParent ? (parent[idx] = aParent) : null
      );
    } else {
      parent.forEach((p, idx) =>
        p === aParent ? (parent[idx] = bParent) : null
      );
    }
    setCount--;
  };
  connections.forEach((connection) => union(connection[0], connection[1]));
  return setCount - sameParentCount <= 1 ? setCount - 1 : -1;
};

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
function UnionFind(size) {
  this.size = size;
  this.parents = [];
  for (let i = 0; i < this.size; i++) {
    this.parents[i] = i;
  }
}

UnionFind.prototype.find = function (child) {
  if (child == this.parents[child]) return child;
  else return (this.parents[child] = this.find(this.parents[child]));
};

UnionFind.prototype.union = function (a, b) {
  this.parents[a] = b;
};

function kahnsCircuit(n, connections) {
  if (connections.length < n - 1) return -1;
  let uniFind = new UnionFind(n);
  let count = n;
  connections.forEach((connection) => {
    let a = uniFind.find(connection[0]);
    let b = uniFind.find(connection[1]);
    if (a != b) {
      uniFind.union(a, b);
      count--;
    }
  });
  return count - 1;
}

var makeConnected = function (n, connections) {
  return kahnsCircuit(n, connections);
};
