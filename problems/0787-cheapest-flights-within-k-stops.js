// 787. Cheapest Flights Within K Stops
// Difficulty: Medium

/* Description */
// There are n cities connected by some number of flights. You are given an array flights where flights[i] = [fromi, toi, pricei] indicates that there is a flight from city fromi to city toi with cost pricei.

// You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.

/* Constraints */
// 1 <= n <= 100
// 0 <= flights.length <= (n * (n - 1) / 2)
// flights[i].length == 3
// 0 <= fromi, toi < n
// fromi != toi
// 1 <= pricei <= 10^4
// There will not be any multiple flights between two cities.
// 0 <= src, dst, k < n
// src != dst

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const adj = new Map();

  for (let [st, en, w] of flights) {
    if (adj.has(st)) adj.get(st).push([en, w]);
    else adj.set(st, [[en, w]]);
  }

  function dijkstra(start) {
    const q = [];
    const dist = Array(n).fill(Infinity);

    q.push([start, 0, 0]);
    dist[start] = 0;

    while (q.length) {
      const [here, cost, cnt] = q.shift();

      if (cnt > k || !adj.get(here)) continue;

      for (let [next, weight] of adj.get(here)) {
        const nextDist = cost + weight;
        if (dist[next] > nextDist) {
          dist[next] = nextDist;
          q.push([next, nextDist, cnt + 1]);
        }
      }
    }
    return dist[dst];
  }

  const ans = dijkstra(src);
  return ans === Infinity ? -1 : ans;
};

// -----------------------------------
class Heap {
  constructor() {
    this.array = [];
  }

  poll() {
    if (this.array.length === 0) {
      return null;
    }

    if (this.array.length === 1) {
      return this.array.pop();
    }

    const item = this.array[0];

    this.array[0] = this.array.pop();
    this.heapifyDown(0);

    return item;
  }

  add(item) {
    this.array.push(item);
    this.heapifyUp(this.array.length - 1);
    return this;
  }

  isEmpty() {
    return this.array.length == 0;
  }

  heapifyUp(childIndex) {
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      parentIndex >= 0 &&
      !this.checkInvariant(this.array[parentIndex], this.array[childIndex])
    ) {
      [this.array[parentIndex], this.array[childIndex]] = [
        this.array[childIndex],
        this.array[parentIndex],
      ];
      childIndex = parentIndex;
      parentIndex = Math.floor((parentIndex - 1) / 2);
    }
  }

  heapifyDown(parentIndex) {
    let childIndex1 = parentIndex * 2 + 1;
    let childIndex2 = parentIndex * 2 + 2;
    let nextIndex;

    while (childIndex1 < this.array.length) {
      if (
        childIndex2 < this.array.length &&
        this.checkInvariant(this.array[childIndex2], this.array[childIndex1])
      ) {
        nextIndex = childIndex2;
      } else {
        nextIndex = childIndex1;
      }

      if (this.checkInvariant(this.array[parentIndex], this.array[nextIndex])) {
        break;
      }

      [this.array[parentIndex], this.array[nextIndex]] = [
        this.array[nextIndex],
        this.array[parentIndex],
      ];
      parentIndex = nextIndex;
      childIndex1 = nextIndex * 2 + 1;
      childIndex2 = nextIndex * 2 + 2;
    }
  }

  checkInvariant(a, b) {
    return a[0] <= b[0];
  }
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
  var mn = new Array(n + 1).fill(Infinity);
  mn[src] = 0;
  for (var k = 0; k < K + 1; k++) {
    var newmn = [].concat(mn);
    for (var i = 0; i < flights.length; i++) {
      var f = flights[i],
        a = f[0],
        b = f[1],
        c = f[2];
      newmn[b] = Math.min(newmn[b], mn[a] + c);
    }
    mn = [].concat(newmn);
  }
  return mn[dst] != Infinity ? mn[dst] : -1;
};
