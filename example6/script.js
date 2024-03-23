// let array = [15, 16, 17, 18, 19];

// let addNums = array.reduce(function (acc, cv) {
//   return acc + cv;
// }, 10);

// console.log(addNums);



// - The `.reduce()` method iterates through an array and returns a single value.
// - There are two scenearios
//     - Without inital value
//     - With inital value
// - **How reduce() works without an initial value**
// - The code below shows what happens if we call `reduce()` with an array and no initial value.



// example1

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