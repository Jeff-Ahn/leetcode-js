// 1845. Seat Reservation Manager
// Difficulty: Medium

/* Description */
// Design a system that manages the reservation state of n seats that are numbered from 1 to n.

// Implement the SeatManager class:

// SeatManager(int n) Initializes a SeatManager object that will manage n seats numbered from 1 to n. All seats are initially available.
// int reserve() Fetches the smallest-numbered unreserved seat, reserves it, and returns its number.
// void unreserve(int seatNumber) Unreserves the seat with the given seatNumber.

/* Constraints */
// 1 <= n <= 10^5
// 1 <= seatNumber <= n
// For each call to reserve, it is guaranteed that there will be at least one unreserved seat.
// For each call to unreserve, it is guaranteed that seatNumber will be reserved.
// At most 10^5 calls in total will be made to reserve and unreserve.

var SeatManager = function (n) {
  // start at 0 since we'll increment first before returning
  this.nextAvailable = 0;
  this.heap = [];
};

SeatManager.prototype.reserve = function () {
  if (this.heap.length) {
    return pop(this.heap);
  }
  this.nextAvailable += 1;
  return this.nextAvailable;
};

SeatManager.prototype.unreserve = function (seatNumber) {
  push(seatNumber, this.heap);
};

// min-heap
const push = (val, heap) => {
  heap.push(val);
  siftUp(heap);
};

const siftUp = (heap) => {
  let current = heap.length - 1;

  while (current > 0) {
    const parent = Math.ceil(current / 2) - 1;

    if (heap[current] < heap[parent]) {
      [heap[current], heap[parent]] = [heap[parent], heap[current]];
      current = parent;
    } else break;
  }
};

const pop = (heap) => {
  const last = heap.length - 1;
  [heap[0], heap[last]] = [heap[last], heap[0]];
  const seat = heap.pop();
  siftDown(heap);
  return seat;
};

const siftDown = (heap) => {
  let current = 0;

  while (true) {
    const left = current * 2 + 1;
    const right = left + 1;
    let next = current;

    if (heap[left] && heap[left] < heap[next]) next = left;
    if (heap[right] && heap[right] < heap[next]) next = right;

    if (next !== current) {
      [heap[current], heap[next]] = [heap[next], heap[current]];
      current = next;
    } else break;
  }
};
