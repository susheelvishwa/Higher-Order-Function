const votes = [
  { candidate: "A", votes: 120 },
  { candidate: "B", votes: 85 },
  { candidate: "C", votes: 210 },
  { candidate: "D", votes: 150 },
];

function calculateTotalVotes(votes) {
  return votes.reduce((acc, curr) => acc + curr.votes, 0);
}

console.log(calculateTotalVotes(votes));
