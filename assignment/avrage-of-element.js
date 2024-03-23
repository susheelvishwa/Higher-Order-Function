// Problem 1: Find the average of elements present at odd index of the following array.
// let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let avrage =
  arr
    .filter(function (ele, i) {
      return i % 2 !== 0;
    })
    .reduce(function (acc, ele) {
      return acc + ele;
    }, 0) /
  (arr.length / 2);

console.log(avrage);
