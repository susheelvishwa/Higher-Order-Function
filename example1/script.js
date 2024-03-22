// let obj1 = {
//   firstname: "susheel",
//   lastname: "vishwakarma",
//   greet: function () {
//     return this;
//   },
// };
// console.log(obj1.greet());

let obj2 = {
  firstname: "susheel",
  lastname: "vishwakarma",
  greet: function () {
      // return `${this.firstname} ${this.lastname}`;
      return this.firstname + " " + this.lastname
  },
};

console.log(obj2.greet());
