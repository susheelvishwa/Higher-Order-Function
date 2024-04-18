let array = [10, 16, 17, 18, 19];

let addNums = function (acc, cv) {
  return acc + cv;
};

console.log(array.reduce(addNums, 10));
