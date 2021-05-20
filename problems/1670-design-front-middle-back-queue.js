// 1670. Design Front Middle Back Queue
// Difficulty: Medium

/* Description */
// Design a queue that supports push and pop operations in the front, middle, and back.

// Implement the FrontMiddleBack class:

// FrontMiddleBack() Initializes the queue.
// void pushFront(int val) Adds val to the front of the queue.
// void pushMiddle(int val) Adds val to the middle of the queue.
// void pushBack(int val) Adds val to the back of the queue.
// int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
// int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
// int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
// Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

// Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
// Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].

/* Constraints */
// 1 <= val <= 10^9
// At most 1000 calls will be made to pushFront, pushMiddle, pushBack, popFront, popMiddle, and popBack.

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

var FrontMiddleBackQueue = function () {
  this.dblLinkedList = new DoublyLinkedList();
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  //O(N)
  this.dblLinkedList.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  //O(N)
  let indexToPush = 0;

  if (this.dblLinkedList.length % 2 === 0) {
    indexToPush = this.dblLinkedList.length / 2;
  } else {
    indexToPush = Math.floor(this.dblLinkedList.length / 2);
  }
  this.dblLinkedList.insertAtIndex(indexToPush, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  //O(1)
  this.dblLinkedList.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  //O(N)
  let returnedNode = this.dblLinkedList.shift();
  return returnedNode.value ? returnedNode.value : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  //O(N)
  let indexToPop = 0;

  if (this.dblLinkedList.length > 2) {
    if (this.dblLinkedList.length % 2 === 0) {
      indexToPop = this.dblLinkedList.length / 2 - 1;
    } else {
      indexToPop = Math.floor(this.dblLinkedList.length / 2);
    }
  }

  let returnedNode = this.dblLinkedList.removeAtIndex(indexToPop);
  return returnedNode.value ? returnedNode.value : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  //O(1)
  let returnedNode = this.dblLinkedList.pop();
  return returnedNode.value ? returnedNode.value : -1;
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    //in case of empty list
    if (this.length === 0) {
      return false;
    }
    //get popped node
    const popped = this.tail;
    //save newTail to a variable (could be null)
    const newTail = this.tail.prev;
    //if newTail is not null
    if (newTail) {
      //sever connection to popped node
      newTail.next = null;
      //sever connection from popped node
      this.tail.prev = null;
      //in case of 1 length list
    } else {
      //make sure to edit head in case newTail is null
      this.head = null;
    }
    //assign new tail (could be null)
    this.tail = newTail;
    // subtract length
    this.length--;

    return popped;
  }

  shift() {
    //in case list is empty
    if (!this.head) {
      return false;
    }
    //save shifted node to variable
    const shiftedNode = this.head;
    //make the new head the next (might be null)
    const newHead = this.head.next; //might be null
    //if list is more than 1
    if (this.head !== this.tail) {
      newHead.prev = null;
      shiftedNode.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;
    this.length--;

    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  insertAtIndex(index, val) {
    //if index doesn't exist
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const after = this.getNodeAtIndex(index);

      const before = after.prev;
      after.prev = newNode;
      before.next = newNode;
      newNode.next = after;
      newNode.prev = before;
      this.length++;
    }
    return this;
  }

  removeAtIndex(index) {
    let removedNode;

    if (index >= this.length) {
      return false;
    }
    if (index == 0) {
      removedNode = this.shift();
    } else if (index == this.length - 1) {
      removedNode = this.pop();
    } else {
      removedNode = this.getNodeAtIndex(index);
      const after = removedNode.next;
      const before = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      before.next = after;
      after.prev = before;
      this.length--;
    }

    return removedNode;
  }

  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) {
      return false;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
