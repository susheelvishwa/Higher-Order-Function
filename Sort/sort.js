let data = [
  {
    title: "shiet",
    price: 500,
  },
  {
    title: "paint",
    price: 600,
  },
  {
    title: "cap",
    price: 700,
  },
  {
    title: "tshiet",
    price: 800,
  },
];

let narr = data.sort(function (ele1, ele2) {
    // return ele2.price - ele1.price
    // return ele1.title - ele2.title
    return ele2.title.localeCompare(ele1.title)
});

console.log(narr);




// let arr = ["a", "b", "c"]
// let narr = arr.short()
// console.log(narr);