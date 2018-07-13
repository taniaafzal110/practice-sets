let computerSecret;
let userGuess;

computerSecret = parseInt(Math.random() * 100);
userGuess = 40;

if (userGuess === computerSecret) {
	console.log("Congratulations! you win!! you guessed the element");
}else if (userGuess > computerSecret) {
	console.log("Too High");
}else if (userGuess < computerSecret) {
	console.log("Too Low");
}