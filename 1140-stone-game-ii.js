// 1140. Stone Game II
// Difficulty: Medium

/* Description */
// Alice and Bob continue their games with piles of stones.  There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].  The objective of the game is to end with the most stones.

// Alice and Bob take turns, with Alice starting first.  Initially, M = 1.

// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).

// The game continues until all the stones have been taken.

// Assuming Alice and Bob play optimally, return the maximum number of stones Alice can get.

/* Constraints */
// 1 <= piles.length <= 100
// 1 <= piles[i] <= 10^4

/**
 * @param {number[]} piles
 * @return {number}
 */
const stoneGameII = (piles) => {
  const n = piles.length;
  const sums = new Array(n);
  if (piles == null || piles.length == 0) return 0;
  for (let i = n - 1; i >= 0; i--) {
    sums[i] = (sums[i + 1] ?? 0) + piles[i]; //the sum from piles[i] to the end
  }

  const hash = Array.from({ length: n }, () => new Array(n).fill(0));
  const helper = (a, i, M) => {
    if (i == a.length) return 0;
    if (2 * M >= a.length - i) {
      return sums[i];
    }
    if (hash[i][M] != 0) return hash[i][M];
    let min = Number.MAX_SAFE_INTEGER; //the min value the next player can get
    for (let x = 1; x <= 2 * M; x++) {
      min = Math.min(min, helper(a, i + x, Math.max(M, x)));
    }
    hash[i][M] = sums[i] - min; //max stones = all the left stones - the min stones next player can get
    return hash[i][M];
  };

  return helper(piles, 0, 1);
};
