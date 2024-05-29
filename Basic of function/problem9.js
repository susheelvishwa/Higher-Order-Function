// we can call function inside function by passing function as parameter

// function perent() {
//   console.log("Perent");
//   function child() {
//     console.log(child);
//   }
//   child( )
// }
// perent()

function perent(oparation) {
  return;
  oparation();
}

function child() {
  return "hello";
}
console.log(perent(child))
