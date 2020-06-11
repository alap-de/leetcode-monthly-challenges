// Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

// Note:
// The number of people is less than 1,100.

// Example

// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]));
  res = [];

  people.forEach((p) => res.splice(p[1], 0, p));
  return res;
};

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);

// [[2, 4], [3, 4],[9, 0],[0, 6],[7, 1],[6, 0],[7, 3],[2, 5],[1, 1],[8, 0],]
//it should be [[6,0],[1,1],[8,0],[7,1],[9,0],[2,4],[0,6],[2,5],[3,4],[7,3]]
