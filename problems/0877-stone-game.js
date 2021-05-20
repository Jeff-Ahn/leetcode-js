// 877. Stone Game
// Difficulty: Medium

/* Description */
// Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

// The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

// Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

// Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

/* Constraints */
// 2 <= piles.length <= 500
// piles.length is even.
// 1 <= piles[i] <= 500
// sum(piles) is odd.

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  piles.sort((a, b) => a - b);
  const total = piles.reduce((acc, cur) => acc + cur, 0);
  const alexSum = piles.reduce((acc, cur, idx) => {
    if (idx % 2) return acc + cur;
    return acc;
  }, 0);
  const leeSum = total - alexSum;

  return alexSum > leeSum;
};
