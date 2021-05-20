// 933. Number of Recent Calls
// Difficulty: Easy

/* Description */
// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

/* Note */
// 1 <= t <= 10^9
// Each test case will call ping with strictly increasing values of t.
// At most 104 calls will be made to ping.

var RecentCounter = function () {
  this.recentCounter = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.recentCounter.push(t);
  return this.recentCounter.filter((_t) => t - 3000 <= _t && _t <= t).length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
