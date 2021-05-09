// 210. Course Schedule II
// Difficulty: Medium

/* Description */
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

/* Constraints */
// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const graph = new Array(numCourses)
    .fill(0)
    .map((_, idx) => ({ course: idx, in: 0, out: [] }));
  prerequisites.forEach((requ) => {
    graph[requ[1]].out.push(requ[0]);
    graph[requ[0]].in++;
  });

  const queue = [];
  const result = [];
  graph.forEach((courseInfo) => {
    if (courseInfo.in === 0) queue.push(courseInfo);
  });
  while (queue.length) {
    const { course, out } = queue.shift();
    result.push(course);
    for (let i = 0; i < out.length; i++) {
      graph[out[i]].in--;
      if (graph[out[i]].in === 0) {
        queue.push(graph[out[i]]);
      }
    }
  }
  return graph.every((courseInfo) => courseInfo.in === 0) ? result : [];
};
