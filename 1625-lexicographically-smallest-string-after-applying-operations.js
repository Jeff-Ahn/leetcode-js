// 1625. Lexicographically Smallest String After Applying Operations
// Difficulty: Medium

/* Description */
// You are given a string s of even length consisting of digits from 0 to 9, and two integers a and b.

// You can apply either of the following two operations any number of times and in any order on s:

// Add a to all odd indices of s (0-indexed). Digits post 9 are cycled back to 0. For example, if s = "3456" and a = 5, s becomes "3951".
// Rotate s to the right by b positions. For example, if s = "3456" and b = 1, s becomes "6345".
// Return the lexicographically smallest string you can obtain by applying the above operations any number of times on s.

// A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears earlier in the alphabet than the corresponding letter in b. For example, "0158" is lexicographically smaller than "0190" because the first position they differ is at the third letter, and '5' comes before '9'.

/* Constraints */
// 2 <= s.length <= 100
// s.length is even.
// s consists of digits from 0 to 9 only.
// 1 <= a <= 9
// 1 <= b <= s.length - 1

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
 var findLexSmallestString = function(s, a, b) {
  const numSet = new Set();
  const n = s.length;
  numSet.add(s);
  const queue = [s];
  let min = 'Infinity';
  
  while (queue.length) {
      let num = queue.shift();
      
      const num1 = num.split('').map((n, idx) => idx % 2 === 1 ? (Number(n) + a) % 10 : n).join('');
      if (!numSet.has(num1)) {
          queue.push(num1);
          numSet.add(num1);
      }
      
      const num2 = num.slice(b) + num.slice(0, b);
      if (!numSet.has(num2)) {
          queue.push(num2);
          numSet.add(num2);
      }
      
      if (Number(num) < Number(min)) min = num;
  }
  
  return min.padStart(n, '0');
};