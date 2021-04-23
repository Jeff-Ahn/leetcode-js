// 732. My Calendar III
// Difficulty: Hard

/* Description */
// A k-booking happens when k events have some non-empty intersection (i.e., there is some time that is common to all k events.)

// You are given some events [start, end), after each given event, return an integer k representing the maximum k-booking between all the previous events.

// Implement the MyCalendarThree class:

// MyCalendarThree() Initializes the object.
// int book(int start, int end) Returns an integer k representing the largest integer such that there exists a k-booking in the calendar.

/* Constraints */
// 0 <= start < end <= 10^9
// At most 400 calls will be made to book.

// same as meeting room problem
// sort starts and ends separately
// if start is earlier than ends, (unintuitive yes)
// you need one more room (two starts before one end = two rooms needed)

class MyCalendarThree {
  constructor() {
    this.starts = [];
    this.ends = [];
  }

  book(start, end) {
    this.starts.push(start);
    this.ends.push(end);

    this.starts.sort((a, b) => a - b);
    this.ends.sort((a, b) => a - b);

    let count = 0;
    let endI = 0;
    for (let i = 0; i < this.starts.length; i++) {
      let curS = this.starts[i];
      let curE = this.ends[endI];
      if (curS < curE) {
        count++;
      } else {
        endI++;
      }
    }
    return count;
  }
}
