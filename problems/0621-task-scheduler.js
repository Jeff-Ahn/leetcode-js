// 621. Task Scheduler
// Difficulty: Medium

/* Description */
// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

/* Constraints */
// 1 <= task.length <= 10^4
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length;
  let time = 0;
  const taskMap = new Map();
  tasks.forEach((task) => taskMap.set(task, taskMap.get(task) + 1 || 1));
  const tasksWithTimer = [...taskMap.entries()]
    .map((task) => [...task, 0])
    .sort((a, b) => b[1] - a[1]);
  while (tasksWithTimer.length) {
    time++;
    tasksWithTimer.forEach((task) => task[2] > 0 && task[2]--);
    const idx = tasksWithTimer.findIndex((task) => task[2] === 0);
    if (idx !== -1) {
      tasksWithTimer[idx][1]--;
      if (tasksWithTimer[idx][1] === 0) {
        tasksWithTimer.splice(idx, 1);
        continue;
      }
      tasksWithTimer[idx][2] = n + 1;
    }
    tasksWithTimer.sort((a, b) => b[1] - a[1]);
  }
  return time;
};

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // the map will be our tracking mechanism
  let m = new Map();

  // the max occurrences
  let maxVal = 0;

  // the number of tasks that has the max occurrences
  let maxValCount = 0;

  for (let k of tasks) {
    let tVal = m.has(k) ? m.get(k) + 1 : 1;
    m.set(k, tVal);
    // set our maxVal and number of maxVal tasks only if we have a new max
    if (tVal > maxVal) {
      maxVal = tVal;
      maxValCount = 1;
      // otherwise, increment number of maxVal tasks
    } else if (tVal === maxVal) {
      maxValCount++;
    }
  }
  // our formula, handle the edge case
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
