// 1267. Count Servers that Communicate
// Difficulty: Medium

/* Description */
// You are given a map of a server center, represented as a m * n integer matrix grid, where 1 means that on that cell there is a server and 0 means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

// Return the number of servers that communicate with any other server.

/* Constraints */
// m == grid.length
// n == grid[i].length
// 1 <= m <= 250
// 1 <= n <= 250
// grid[i][j] == 0 or 1

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const computers = grid.map((row) =>
    row.map((v) => ({ isServer: v, count: 0 }))
  );
  let answer = 0;
  for (let i = 0; i < m; i++) {
    let indice = [];
    for (let j = 0; j < n; j++) {
      if (computers[i][j].isServer) {
        indice.push(j);
      }
    }
    if (indice.length >= 2) {
      indice.forEach((index) => {
        computers[i][index].count++;
        answer++;
      });
    }
  }

  for (let i = 0; i < n; i++) {
    let indice = [];
    for (let j = 0; j < m; j++) {
      if (computers[j][i].isServer) {
        indice.push(j);
      }
    }
    if (indice.length >= 2) {
      indice.forEach((index) => {
        if (computers[index][i].count === 0) answer++;
        computers[index][i].count += 1;
      });
    }
  }

  return answer;
};
