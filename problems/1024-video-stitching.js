// 1024. Video Stitching
// Difficulty: Medium

/* Description */
// You are given a series of video clips from a sporting event that lasted time seconds. These video clips can be overlapping with each other and have varying lengths.

// Each video clip is described by an array clips where clips[i] = [starti, endi] indicates that the ith clip started at starti and ended at endi.

// We can cut these clips into segments freely.

// For example, a clip [0, 7] can be cut into segments [0, 1] + [1, 3] + [3, 7].
// Return the minimum number of clips needed so that we can cut the clips into segments that cover the entire sporting event [0, time]. If the task is impossible, return -1.

/* Constraints */
// 1 <= clips.length <= 100
// 0 <= clips[i][0] <= clips[i][1] <= 100
// 1 <= time <= 100

/**
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
var videoStitching = function (clips, time) {
  clips.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let start = 0;
  let end = 0;
  let i = 0;
  while (start < time) {
    while (i < clips.length && clips[i][0] <= start) {
      end = Math.max(end, clips[i][1]);
      i++;
    }

    if (start === end) return -1;
    start = end;
    answer++;
  }

  return answer;
};

const videoStitching = (clips, T) => {
  let dp = new Array(T + 1).fill(T + 1);
  dp[0] = 0;
  for (let i = 1; i <= T; i++) {
    if (dp[i - 1] >= T) continue;
    for (const c of clips) {
      if (c[0] < i && i <= c[1]) {
        dp[i] = Math.min(dp[i], dp[c[0]] + 1);
      }
    }
  }
  return dp[T] == T + 1 ? -1 : dp[T];
};
