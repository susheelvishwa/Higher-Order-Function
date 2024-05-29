let count = 0;
function onclick(condition,name) {
  if (condition == "incriment") {
    count += 1
    return `numbers of like ${count} , by ${name}`;
  } else if (condition == "decriment") {
    count -= 1
    return `numbers of dislike ${count} , by ${name}`;
  }
};
console.log(onclick("incriment","susheel"));
console.log(onclick("incriment","vartika"));
console.log(onclick("decriment", "vartika"));