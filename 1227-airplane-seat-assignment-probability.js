// 1227. Airplane Seat Assignment Probability
// Difficulty: Medium

/* Description */
// n passengers board an airplane with exactly n seats. The first passenger has lost the ticket and picks a seat randomly. But after that, the rest of passengers will:

// Take their own seat if it is still available,
// Pick other seats randomly when they find their seat occupied
// What is the probability that the n-th person can get his own seat?

/* Constraints */
// 1 <= n <= 10^5

/**
 * @param {number} n
 * @return {number}
 */
var nthPersonGetsNthSeat = function (n) {
  return n === 1 ? 1 : 0.5;
};
