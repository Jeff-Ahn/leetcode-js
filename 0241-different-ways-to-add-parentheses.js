// 241. Different Ways to Add Parentheses
// Difficulty: Medium

/* Description */
// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

/* Constraints */
// 1 <= expression.length <= 20
// expression consists of digits and the operator '+', '-', and '*'.

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (str) {
  let map = new Map();

  let recurse = function (expression) {
    if (map.has(expression)) return map.get(expression);
    if (expression.length === 1) return [Number(expression)];
    let res = [];

    for (let i = 0; i < expression.length; i++) {
      if (!Number(expression[i])) {
        let left = recurse(expression.slice(0, i));
        let right = recurse(expression.slice(i + 1));

        if (expression[i] === '+') {
          left.forEach((l) => {
            right.forEach((r) => {
              res.push(l + r);
            });
          });
        } else if (expression[i] === '-') {
          left.forEach((l) => {
            right.forEach((r) => {
              res.push(l - r);
            });
          });
        } else if (expression[i] === '*') {
          left.forEach((l) => {
            right.forEach((r) => {
              res.push(l * r);
            });
          });
        }
      }
    }
    res = res.length === 0 ? [Number(expression)] : res;
    map.set(expression, res);
    return res;
  };

  return recurse(str);
};
