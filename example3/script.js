
// ------------foreach----------------

// some inbuilt HOF's
// 1. Map
// 2. ForEach
// 3. Filter
// 4. Reduce

// array.forEach(element => {
    
// });


// example 1

let jsondata = [
  {
    Name: "susheel",
    cource: "B.tech",
    passing_year: 2024,
  },
  {
    Name: "jankit",
    cource: "Bpharma",
    passing_year: 2024,
  },
  {
    Name: "shivam",
    cource: "MBA",
    passing_year: 2024,
  },
  {
    Name: "vartika",
    cource: "B.com",
    passing_year: 2024,
  },
];


// simple function

// for (let i = 0; i < jsondata.length; i++){
//     console.log(jsondata[i]);
// }


// ussing foreatch

// jsondata.forEach(function (ele, i, arr) {
//     console.log(ele);
// })



// example 2


let arr = ["a", "b", "c", "d"]

let output = arr.forEach(function (ele) {
    return ele
})
console.log(output);

// forEach will aleays return undifine