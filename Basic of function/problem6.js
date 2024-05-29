let count = 0;

function incriment() {
  return (count += 1);
}
function decriment() {
  return (count -= 1);
}
console.log(incriment());
console.log(incriment());
console.log(decriment());
console.log(decriment());
console.log(decriment());


