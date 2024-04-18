const words = ["apple", "banana", "pear", "orange", "grape"];

function filterShortWords(arr) {
  return arr
    .filter((word) => word.length >= 5)
    .map((word) => word.toUpperCase());
}

console.log(filterShortWords(words));
