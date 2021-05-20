// 811. Subdomain Visit Count
// Difficulty: Easy

/* Description */
// A website domain like "discuss.leetcode.com" consists of various subdomains. At the top level, we have "com", at the next level, we have "leetcode.com", and at the lowest level, "discuss.leetcode.com". When we visit a domain like "discuss.leetcode.com", we will also visit the parent domains "leetcode.com" and "com" implicitly.

// Now, call a "count-paired domain" to be a count (representing the number of visits this domain received), followed by a space, followed by the address. An example of a count-paired domain might be "9001 discuss.leetcode.com".

// We are given a list cpdomains of count-paired domains. We would like a list of count-paired domains, (in the same format as the input, and in any order), that explicitly counts the number of visits to each subdomain.

/* Notes */
// The length of cpdomains will not exceed 100.
// The length of each domain name will not exceed 100.
// Each address will have either 1 or 2 "." characters.
// The input count in any count-paired domain will not exceed 10000.
// The answer output can be returned in any order.

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const domainMap = new Map();
  const result = [];

  cpdomains.forEach((cpdomain) => {
    const [count, domain] = cpdomain.split(' ');
    const d = domain.split('.');
    for (let i = 0; i < d.length; i++) {
      const key = d.slice(i).join('.');
      domainMap.set(key, domainMap.get(key) + Number(count) || Number(count));
    }
  });

  domainMap.forEach((value, key) => result.push(`${value} ${key}`));
  return result;
};
