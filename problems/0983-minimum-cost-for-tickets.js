// 983. Minimum Cost For Tickets
// Difficulty: Medium

/* Description */
// In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

// Train tickets are sold in 3 different ways:

// a 1-day pass is sold for costs[0] dollars;
// a 7-day pass is sold for costs[1] dollars;
// a 30-day pass is sold for costs[2] dollars.
// The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

// Return the minimum number of dollars you need to travel every day in the given list of days.

/* Note */
// 1 <= days.length <= 365
// 1 <= days[i] <= 365
// days is in strictly increasing order.
// costs.length == 3
// 1 <= costs[i] <= 1000

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const n = days.length;
  const duration = [1, 7, 30];
  const dp = new Array(n).fill(null);

  const dfs = (i) => {
    if (i >= n) return 0;
    if (dp[i] !== null) return dp[i];

    let ans = Infinity;
    let j = i;

    for (let k = 0; k < 3; k++) {
      while (j < n && days[j] < days[i] + duration[k]) j++;
      ans = Math.min(ans, dfs(j) + costs[k]);
    }

    dp[i] = ans;
    return ans;
  };
  return dfs(0);
};

var mincostTickets = function (days, costs) {
  const calendar = Array(366).fill(0);
  const memo = {};

  days.forEach((day) => {
    calendar[day] = 1;
  });

  return rec(1);

  function rec(i) {
    if (i in memo) return memo[i];
    if (i > 365) {
      return 0;
    }

    if (calendar[i] === 0) {
      return rec(i + 1);
    } else {
      memo[i] = Math.min(
        costs[0] + rec(i + 1),
        costs[1] + rec(i + 7),
        costs[2] + rec(i + 30)
      );
      return memo[i];
    }
  }
};
