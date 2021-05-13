// 959. Regions Cut By Slashes
// Difficulty: Medium

/* Description */
// In a N x N grid composed of 1 x 1 squares, each 1 x 1 square consists of a /, \, or blank space.  These characters divide the square into contiguous regions.

// (Note that backslash characters are escaped, so a \ is represented as "\\".)

// Return the number of regions.

/* Constraints */
// 1 <= grid.length == grid[0].length <= 30
// grid[i][j] is either '/', '\', or ' '.

// this is a very common disjoint set implement
function DS(n) {
  var root = [...new Array(n).keys()];
  var rank = new Array(n).fill(0);
  this.find = function (v) {
    if (root[v] !== v) root[v] = this.find(root[v]);
    return root[v];
  };
  this.union = function (i, j) {
    var [ri, rj] = [this.find(i), this.find(j)];
    if (ri === rj) return;
    if (rank[ri] > rank[rj]) root[rj] = ri;
    else if (rank[ri] < rank[rj]) root[ri] = rj;
    else (root[ri] = rj), rank[rj]++;
  };
  // get how many unique unions
  this.getUnoinCount = function () {
    for (var i = 0; i < n; i++) this.find(i);
    return new Set(root).size;
  };
}

function getKeys(i, j, n) {
  var val = i * n + j;
  val *= 2;
  // left and right part key of grid[i][j]
  return [val, val + 1];
}

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  var n = grid.length;
  if (n === 1) return grid[0][0] === ' ' ? 1 : 2;
  var ds = new DS(n * n * 2);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var [left, right] = getKeys(i, j, n);
      // When this cell is ' ', union left and right.
      if (grid[i][j] === ' ') ds.union(left, right);
      // if have upper neighbor
      if (i !== 0) {
        var [upLeft, upRight] = getKeys(i - 1, j, n);
        // For upper neighbor, if it's '/', we should choose right part to union, if '\', choose left.
        var upKey = grid[i - 1][j] === '\\' ? upLeft : upRight;
        // For current cell, if it's '/', we should choose left part to union, if '\', choose right.
        var curKey = grid[i][j] === '/' ? left : right;
        ds.union(upKey, curKey);
      }
      // if have left neighbor
      if (j !== 0) {
        var [leftLeft, leftRight] = getKeys(i, j - 1, n);
        // just choose the right part of the left neighbor
        var leftKey = leftRight;
        // just choose the left part of the current cell
        var curKey = left;
        ds.union(leftKey, curKey);
      }
    }
  }
  return ds.getUnoinCount();
};

/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  let n = grid.length;

  let arr = new Array(3 * n).fill().map((x) => new Array(3 * n).fill(true));
  //  console.log(arr);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '/') {
        arr[3 * i][3 * j + 2] = false;
        arr[3 * i + 1][3 * j + 1] = false;
        arr[3 * i + 2][3 * j] = false;
      } else if (grid[i][j] == '\\') {
        arr[3 * i][3 * j] = false;
        arr[3 * i + 1][3 * j + 1] = false;
        arr[3 * i + 2][3 * j + 2] = false;
      }
    }
  }
  // console.log(arr);
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j]) {
        ans++;
        Helper(arr, i, j, 3 * n, 3 * n);
      }
    }
  }
  return ans;
};

const Helper = (arr, i, j, m, n) => {
  if (0 <= i && i < m && 0 <= j && j <= n && arr[i][j]) {
    arr[i][j] = false;
    Helper(arr, i + 1, j, m, n);
    Helper(arr, i - 1, j, m, n);
    Helper(arr, i, j + 1, m, n);
    Helper(arr, i, j - 1, m, n);
  }
};
