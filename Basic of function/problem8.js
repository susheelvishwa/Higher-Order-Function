//  addcomment function should take a comment parameter and whenever it is called the latest comment should be added to the global comment array.

let comment = [];
function addcomment(com) {
  // if be not pass the argument so console showing undifine
  //com =undifine
  if (com !== undefined){
    comment.push(com);
    return comment;
  } 
  else{
    return "input is requierd"
  }
}

console.log(addcomment("susheel"));
console.log(addcomment("Vartika"));
console.log(addcomment());
