// chainng

// filter and reduce both

let arr = [
  {
    user: "user1",
    status: false,
    price: 500,
  },
  {
    user: "user2",
    status: true,
    price: 400,
  },
  {
    user: "user3",
    status: true,
    price: 300,
  },
  {
    user: "user4",
    status: true,
    price: 200,
  },
];

let newarr = arr.filter(function (ele) {
  return ele.status == true;
})
.reduce(function (acc, ele) {
  return acc + ele.price;
}, 0);

console.log(newarr);



// this procese call as method chaining

