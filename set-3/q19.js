let maths = 100;
let english = 15;
let computerSkills = 60;

if (maths > 50 && computerSkills > 50) {
	console.log("Congratulations! You have passed the techkaro admisssion test");
}else if (maths > 50 && english > 50 || computerSkills > 80) {
	console.log("You have also Qualified");
}else {
	console.log("SORRY! Please try again next year");
}