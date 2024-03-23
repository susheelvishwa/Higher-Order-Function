// print the user name of all the object ussing foreach

let jsondata = [
  {
    Name: "susheel",
    cource: "B.tech",
    passing_year: 2024,
  },
  {
    Name: "pillu",
    cource: "B.tech",
    passing_year: 2024,
  },
  {
    Name: "sonu",
    cource: "B.tech",
    passing_year: 2024,
  },
  {
    Name: "batman",
    cource: "B.tech",
    passing_year: 2024,
  },
];

jsondata.forEach(function (ele) {
    console.log("user name: ",ele.Name);
})



