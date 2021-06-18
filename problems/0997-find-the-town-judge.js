// 997. Find the Town Judge
// Difficulty: Easy

/* Description */
// In a town, there are n people labelled from 1 to n.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

/* Constraints */
// 1 <= n <= 1000
// 0 <= trust.length <= 10^4
// trust[i].length == 2
// trust[i] are all different
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= n

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trusts = new Array(n + 1).fill(0);
  trust.forEach((node) => {
    const [from, to] = node;
    trusts[from]--;
    trusts[to]++;
  });

  for (let i = 1; i <= n; i++) {
    if (trusts[i] === n - 1) return i;
  }
  return -1;
};
