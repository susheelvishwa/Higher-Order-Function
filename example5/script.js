// if we want to delate user 2 what i camn do with help of 2 so we use filter so let see example 4

// // filter
// let arr = [1, 2, 3, 4, 5]
// let narr = arr.filter(function (ele) {
//     return ele == 3
// })
// console.log(narr);



// var sweets = ["kova","gulabjamun","laddu","mysorepak","badshaw"]
// var output= sweets.filter(function (elem,index) {
//     return elem=="kova"
// })

// console.log(output) // ["kova"]


let userarr = [
  {
    id: 1,
    user: "user1",
  },
  {
    id: 2,
    user: "user2",
  },
  {
    id: 3,
    user: "user3",
  },
];


let narr = userarr.filter(function (ele) {
    return ele.user !== "user2"
})

console.log(narr);