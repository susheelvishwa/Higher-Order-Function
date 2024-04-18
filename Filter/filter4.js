
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


let narr = data.filter(function (ele, i, arr) {
  return (ele.price<600 || ele.title == "tshirt")
})

console.log(narr);