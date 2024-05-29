function greating(N, name) {
  if (N >= 1 && N <= 24) {
    if (N >= 6 && N <= 12) {
      console.log("Good Morning" + " " + name);
    } else if (N > 12 && N <= 16) {
      console.log("Good Afternoon");
    } else if (N > 16 && N <= 20) {
      console.log("Good Evining");
    } else {
      console.log("Good Night");
    }
  } else {
    console.log("TIme is not valid");
  }
}
greating(7, "Susheel");
