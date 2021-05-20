// 207. Course Schedule
// Difficulty: Medium

/* Description */
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

/* Constraints */
// 1 <= numCourses <= 10^5
// 0 <= prerequisites.length <= 5000
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// All the pairs prerequisites[i] are unique.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const edgeList = [...Array(numCourses)].map((_) => []);
  const indegree = [...Array(numCourses)].map((_) => 0);

  prerequisites.forEach((prereqs) => {
    edgeList[prereqs[1]].push(prereqs[0]);
    indegree[prereqs[0]]++;
  });

  const q = [];
  indegree.forEach((degree, i) => {
    if (degree === 0) {
      q.push(i);
    }
  });

  while (q.length > 0) {
    const curr = q.pop();
    edgeList[curr].forEach((course) => {
      indegree[course]--;
      if (indegree[course] === 0) {
        q.push(course);
      }
    });
  }

  return !indegree.some((degree) => degree > 0);
};
