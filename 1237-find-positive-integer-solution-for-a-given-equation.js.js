// 1237. Find Positive Integer Solution for a Given Equation
// Difficulty: Medium

/* Description */
// Given a callable function f(x, y) with a hidden formula and a value z, reverse engineer the formula and return all positive integer pairs x and y where f(x,y) == z. You may return the pairs in any order.

// While the exact formula is hidden, the function is monotonically increasing, i.e.:

// f(x, y) < f(x + 1, y)
// f(x, y) < f(x, y + 1)
// The function interface is defined like this:

// interface CustomFunction {
// public:
//   // Returns some positive integer f(x, y) for two positive integers x and y based on a formula.
//   int f(int x, int y);
// };
// We will judge your solution as follows:

// The judge has a list of 9 hidden implementations of CustomFunction, along with a way to generate an answer key of all valid pairs for a specific z.
// The judge will receive two inputs: a function_id (to determine which implementation to test your code with), and the target z.
// The judge will call your findSolution and compare your results with the answer key.
// If your results match the answer key, your solution will be Accepted.

/* Constraints */
// 1 <= function_id <= 9
// 1 <= z <= 100
// It is guaranteed that the solutions of f(x, y) == z will be in the range 1 <= x, y <= 1000.
// It is also guaranteed that f(x, y) will fit in 32 bit signed integer if 1 <= x, y <= 1000.

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  const answer = [];
  const { f } = customfunction;
  for (let x = 1; x <= 1000; x++) {
    for (let y = 1; y <= 1000; y++) {
      if (f(x, y) === z) answer.push([x, y]);
    }
  }
  return answer;
};

// better solution
// 문제의 조건이 크지않아 O(n^2)으로 풀었지만
// 아래는 binarySearch를 사용해 O(n*log(n))으로 품
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
// for loop + binary search： O(n * log(n)) time | O(n) space
var findSolution = function (customfunction, z) {
  const ans = [];
  for (let x = 1; x <= 1000; x++) {
    if (customfunction.f(x, 1) > z) break;
    let left = 1,
      right = 1000;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (customfunction.f(x, mid) === z) {
        ans.push([x, mid]);
        break;
      } else if (customfunction.f(x, mid) > z) {
        right = mid - 1;
      } else if (customfunction.f(x, mid) < z) {
        left = mid + 1;
      }
    }
  }
  return ans;
};
