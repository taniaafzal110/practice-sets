let currentScore = 100;
let  userScore = 50;

if (userScore > currentScore) {
	console.log("Congratulations your new high score is" + userScore);
}else {
	console.log("Try Again" + (currentScore - userScore + 1));

}