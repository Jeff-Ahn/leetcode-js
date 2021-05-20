// 1792. Maximum Average Pass Ratio
// Difficulty: Medium

/* Description */
// There is a school that has classes of students and each class will be having a final exam. You are given a 2D integer array classes, where classes[i] = [passi, totali]. You know beforehand that in the ith class, there are totali total students, but only passi number of students will pass the exam.

// You are also given an integer extraStudents. There are another extraStudents brilliant students that are guaranteed to pass the exam of any class they are assigned to. You want to assign each of the extraStudents students to a class in a way that maximizes the average pass ratio across all the classes.

// The pass ratio of a class is equal to the number of students of the class that will pass the exam divided by the total number of students of the class. The average pass ratio is the sum of pass ratios of all the classes divided by the number of the classes.

// Return the maximum possible average pass ratio after assigning the extraStudents students. Answers within 10-5 of the actual answer will be accepted.

/* Constraints */
// 1 <= classes.length <= 10^5
// classes[i].length == 2
// 1 <= passi <= totali <= 10^5
// 1 <= extraStudents <= 10^5

var maxAverageRatio = function (classes, extraStudents) {
  // adding the benefit to each class so i don't have to make a helper function or write really ugly code
  // to compare classes in the heap
  classes.forEach((el) => {
    // 'class' is restricted, would like a better name though
    const [pass, total] = el;
    const benefitForNextStudent = (pass + 1) / (total + 1) - pass / total;
    el.push(benefitForNextStudent);
  });

  heapify(classes);

  for (let i = 0; i < extraStudents; i += 1) {
    classes[0][0] += 1;
    classes[0][1] += 1;

    const [pass, total] = classes[0];
    classes[0][2] = (pass + 1) / (total + 1) - pass / total;

    siftDown(0, classes);
  }

  return (
    classes.reduce((total, [pass, students]) => total + pass / students, 0) /
    classes.length
  );
};

const heapify = (heap) => {
  const start = Math.floor(heap.length / 2) - 1;
  for (let i = start; i >= 0; i -= 1) {
    siftDown(i, heap);
  }
};

const siftDown = (start, heap) => {
  let current = start;

  while (true) {
    const left = current * 2 + 1;
    const right = left + 1;
    let next = current;

    if (heap[left] && heap[left][2] > heap[next][2]) next = left;
    if (heap[right] && heap[right][2] > heap[next][2]) next = right;

    if (next !== current) {
      [heap[current], heap[next]] = [heap[next], heap[current]];
      current = next;
    } else break;
  }
};
