const numbers = [1, 2, 3, 4, 5];

function calculateSum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(calculateSum(numbers));
