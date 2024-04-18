let arr = [
  {
    user: "user1",
    status: false,
  },
  {
    user: "user2",
    status: false,
  },
  {
    user: "user3",
    status: false,
  },
  {
    user: "user4",
    status: false,
  },
];

let narr = arr.map(function (ele) {
  if (ele.user === "user1" || ele.user === "user4" || ele.user === "user2" || ele.user === "user3") {
    ele.status ? (ele.status = false) : (ele.status = true);
  }
  return ele
})
console.log(narr);