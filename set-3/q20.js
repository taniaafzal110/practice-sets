let maths = 100;
let english = 15;
let computerSkills = 60;

if (maths > 50 && english > 50 && computerSkills > 50) || (maths === 100 || english === 100 || computerSkills === 100) {
	console.log("Congratulations! You have passed the teshkaro admission test");
}else if ((maths > 50 && english > 50) || computerSkills > 80) {
	console.log("You have also qulified!");
}else {
	console.log("Sorry! Please try again next year!");
}