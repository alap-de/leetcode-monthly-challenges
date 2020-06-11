/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.wRanges = getWeigtRange(w);
  this.sum = this.wRanges[this.wRanges.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const randomNum = Math.random() * this.sum;

  //   return this.wRanges.findIndex((range) => randomNum < range);
  return binarySearch(this.wRanges, randomNum);
};

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (target >= arr[mid]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
};

const getWeigtRange = (w) => {
  let sum = 0;
  const wRanges = [];
  w.forEach((weight) => {
    sum += weight;
    wRanges.push(sum);
  });

  return wRanges;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const obj = new Solution([1, 3]);
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
