function greating(N, name) {
  if (N >= 1 && N <= 24) {
    if (N >= 6 && N <= 12) {
      return "Good Morning" + " " + name;
    } else if (N > 12 && N <= 16) {
      return "Good Afternoon";
    } else if (N > 16 && N <= 20) {
      return "Good Evining";
    } else {
      return "Good Night";
    }
  } else {
    return "TIme is not valid";
  }
}
console.log(greating(7, "Susheel"));
