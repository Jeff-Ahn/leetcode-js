// 947. Most Stones Removed with Same Row or Column
// Difficulty: Medium

/* Description */
// On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.

// A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.

// Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

/* Constraints */
// 1 <= stones.length <= 1000
// 0 <= xi, yi <= 10^4
// No two stones are at the same coordinate point.

// https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/discuss/294209/Javascript-Union-Find-Easy-to-Understand
/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let subsetCount = stones.length;
  const parentMap = [];

  // Initialize the parent map to give each stone it's own set
  for (let i = 0; i < stones.length; i++) {
    parentMap[i] = i;
  }

  for (let thisStonesIdx = 1; thisStonesIdx < stones.length; thisStonesIdx++) {
    const thisStone = stones[thisStonesIdx];

    for (
      let thatStonesIdx = 0;
      thatStonesIdx < thisStonesIdx;
      thatStonesIdx++
    ) {
      const thatStone = stones[thatStonesIdx];

      // Not in the same row or column, skip ahead
      if (thisStone[0] !== thatStone[0] && thisStone[1] !== thatStone[1])
        continue;

      // If this stone isn't already part of an existing subset
      if (parentMap[thisStonesIdx] === thisStonesIdx) {
        // Add it to that one's subset
        parentMap[thisStonesIdx] = thatStonesIdx;
        subsetCount -= 1;
      } else {
        // Find this stone's root
        let currentThisStonesParentIndex = parentMap[thisStonesIdx];
        while (
          parentMap[currentThisStonesParentIndex] !==
          currentThisStonesParentIndex
        ) {
          currentThisStonesParentIndex =
            parentMap[currentThisStonesParentIndex];
        }

        // Find that stone's root
        let currentThatStonesParentIndex = parentMap[thatStonesIdx];
        while (
          parentMap[currentThatStonesParentIndex] !==
          currentThatStonesParentIndex
        ) {
          currentThatStonesParentIndex =
            parentMap[currentThatStonesParentIndex];
        }

        // If they're not in the same subset, merge them
        if (currentThisStonesParentIndex != currentThatStonesParentIndex) {
          parentMap[currentThisStonesParentIndex] =
            currentThatStonesParentIndex;
          subsetCount -= 1;
        }
      }
    }
  }

  return stones.length - subsetCount;
};
