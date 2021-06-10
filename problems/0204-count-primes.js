// 204. Count Primes
// Difficulty: Medium

/* Description */
// Count the number of prime numbers less than a non-negative number, n.

/* Constraints */
// 0 <= n <= 5 * 10^6

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  const dp = new Array(n).fill(false);

  for (let i = 2; i * i < n; i++) {
    if (dp[i]) continue;
    if (isPrime(i)) {
      for (let j = i * i; j <= n; j += i) {
        dp[j] = true;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!dp[i]) count++;
  }

  return count;
};

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i ** 2 <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};
