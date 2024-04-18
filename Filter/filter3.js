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
