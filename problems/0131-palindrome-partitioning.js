// 131. Palindrome Partitioning
// Difficulty: Medium

/* Description */
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

/* Constraints */
// 1 <= s.length <= 16
// s contains only lowercase English letters.

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const answer = [];
  const n = s.length;

  const dfs = (searchString, parts = []) => {
    if (searchString.length === 0) {
      answer.push([...parts]);
      return;
    }

    for (let i = 1; i <= searchString.length; i++) {
      const slicedString = searchString.slice(0, i);
      if (isPalindrome(slicedString)) {
        parts.push(slicedString);
        dfs(searchString.slice(i), parts);
        parts.pop();
      }
    }
  };

  dfs(s);

  return answer;
};

const isPalindrome = (s) => {
  for (let start = 0, end = s.length - 1; start < end; start++, end--) {
    if (s[start] !== s[end]) return false;
  }
  return true;
};
