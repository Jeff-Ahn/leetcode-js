// 332. Reconstruct Itinerary
// Difficulty: Medium

/* Description */
// You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

/* Constraints */
// 1 <= tickets.length <= 300
// tickets[i].length == 2
// fromi.length == 3
// toi.length == 3
// fromi and toi consist of uppercase English letters.

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  const graph = createGraph(tickets);
  const output = dfs(graph, 'JFK');
  return output.reverse();
};

function dfs(graph, u, output = []) {
  const neighbors = graph[u] || [];
  while (neighbors.length) {
    const v = neighbors.shift();
    dfs(graph, v, output);
  }
  output.push(u);
  return output;
}

function createGraph(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    if (!(from in graph)) graph[from] = [];
    graph[from].push(to);
  }
  for (const key in graph) {
    graph[key].sort();
  }
  return graph;
}
