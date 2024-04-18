let array = [15, 16, 50, 668];

let addNums = array.reduce(function (acc, cv) {
  return acc + cv;
}, 10);

console.log(addNums);
