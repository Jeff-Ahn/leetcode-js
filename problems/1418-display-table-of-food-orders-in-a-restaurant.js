// 1418. Display Table of Food Orders in a Restaurant
// Difficulty: Medium

/* Description */
// Given the array orders, which represents the orders that customers have done in a restaurant. More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] where customerNamei is the name of the customer, tableNumberi is the table customer sit at, and foodItemi is the item customer orders.

// Return the restaurant's “display table”. The “display table” is a table whose row entries denote how many of each food item each table ordered. The first column is the table number and the remaining columns correspond to each food item in alphabetical order. The first row should be a header whose first column is “Table”, followed by the names of the food items. Note that the customer names are not part of the table. Additionally, the rows should be sorted in numerically increasing order.

/* Constraints */
// 1 <= orders.length <= 5 * 10^4
// orders[i].length == 3
// 1 <= customerNamei.length, foodItemi.length <= 20
// customerNamei and foodItemi consist of lowercase and uppercase English letters and the space character.
// tableNumberi is a valid integer between 1 and 500.

/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  const foodSet = new Set();
  const tableMap = new Map();

  orders.forEach((order) => {
    const [customer, tableNum, food] = order;
    foodSet.add(food);
    if (!tableMap.get(tableNum)) tableMap.set(tableNum, new Map());
    const map = tableMap.get(tableNum);
    map.set(food, map.get(food) + 1 || 1);
  });

  const answer = [['Table', ...[...foodSet].sort()]];
  const n = foodSet.size;

  const tableKeys = [...tableMap.keys()].sort((a, b) => a - b);
  for (let tableKey of tableKeys) {
    const result = new Array(n + 1).fill('0');
    const map = tableMap.get(tableKey);
    result[0] = tableKey;
    for (let key of map.keys()) {
      const index = answer[0].indexOf(key);
      result[index] = map.get(key).toString();
    }
    answer.push(result);
  }

  return answer;
};
