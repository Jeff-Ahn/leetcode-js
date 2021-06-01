// 638. Shopping Offers
// Difficulty: Medium

/* Description */
// In LeetCode Store, there are n items to sell. Each item has a price. However, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.

// You are given an integer array price where price[i] is the price of the ith item, and an integer array needs where needs[i] is the number of pieces of the ith item you want to buy.

// You are also given an array special where special[i] is of size n + 1 where special[i][j] is the number of pieces of the jth item in the ith offer and special[i][n] (i.e., the last integer in the array) is the price of the ith offer.

// Return the lowest price you have to pay for exactly certain items as given, where you could make optimal use of the special offers. You are not allowed to buy more items than you want, even if that would lower the overall price. You could use any of the special offers as many times as you want.

/* Constraints */
// n == price.length
// n == needs.length
// 1 <= n <= 6
// 0 <= price[i] <= 10
// 0 <= needs[i] <= 10
// 1 <= special.length <= 100
// special[i].length == n + 1
// 0 <= special[i][j] <= 50

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, specials, needs) {
  const n = price.length;
  const map = new Map();

  return topDown(0, needs);

  function topDown(index, needs) {
    const key = `${index}#${needs.join('#')}`;

    // base case
    if (index == specials.length) {
      let restOfCost = 0;

      for (let i = 0; i < n; i++) {
        restOfCost += needs[i] * price[i];
        needs[i] = 0;
      }

      return restOfCost;
    }

    if (map.has(key)) return map.get(key);

    let included = Number.MAX_SAFE_INTEGER;

    const special = specials[index];

    if (shouldInclude(special, needs)) {
      const updatedNeeds = useSpecialOffer(special, needs);
      included = special[n] + topDown(index, updatedNeeds);
    }

    const skipped = topDown(index + 1, needs);

    const res = Math.min(included, skipped);
    map.set(key, res);
    return res;
  }

  function shouldInclude(special, needs) {
    for (let i = 0; i < n; i++) {
      if (needs[i] < special[i]) {
        return false;
      }
    }

    return true;
  }

  function useSpecialOffer(special, needs) {
    const updatedNeeds = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      updatedNeeds[i] = needs[i] - special[i];
    }

    return updatedNeeds;
  }
};

/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  const validOffers = [];

  for (let i = 0; i < special.length; i++) {
    const obj = special[i];
    let valid = true;
    for (let j = 0; j < needs.length; j++) {
      if (needs[j] < obj[j]) {
        valid = false;
        break;
      }
    }
    if (valid) validOffers.push(obj);
  }

  let cost = 0;
  for (let i = 0; i < needs.length; i++) {
    cost = cost + price[i] * needs[i];
  }

  for (let i = 0; i < validOffers.length; i++) {
    let specialOffer = validOffers[i];

    let newNeeds = [];
    for (let j = 0; j < needs.length; j++) {
      newNeeds.push(needs[j] - specialOffer[j]);
    }

    cost = Math.min(
      cost,
      shoppingOffers(price, validOffers, newNeeds) + specialOffer[needs.length]
    );
  }

  return cost;
};
