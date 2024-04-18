let arr = [
  {
    user: "user1",
    status: false,
    price: 500
  },
  {
    user: "user2",
    status: false,
    price: 400
  },
  {
    user: "user3",
    status: false,
    price: 300
  },
  {
    user: "user4",
    status: false,
    price: 200
  },
];

let finalprice = arr.reduce(function (acc, ele) {
    return acc + ele.price
},0)

console.log(finalprice);