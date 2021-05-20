// 1402. Reducing Dishes
// Difficulty: Hard

/* Description */
// A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

// Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level  i.e.  time[i]*satisfaction[i]

// Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.

// Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

/* Constraints */
// n == satisfaction.length
// 1 <= n <= 500
// -10^3 <= satisfaction[i] <= 10^3

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  const n = satisfaction.length;
  satisfaction.sort((a, b) => a - b);

  if (satisfaction[n - 1] <= 0) return 0;
  console.log(satisfaction);
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(
      satisfaction.slice(i).reduce((acc, cur, idx) => acc + cur * (idx + 1), 0),
      max
    );
  }

  return max;
};
