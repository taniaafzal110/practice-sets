let maxMaths = 20;
let maxEnglish = 10;
let maxCompSkills = 50; 

function checkResult() {
	let userMathMarks = parseInt(document.querySelector("#math").value);
	let userEnghMarks = parseInt(document.querySelector("#eng").value);
	let userCompMarks = parseInt(document.querySelector("#comp").value);
	if (userMathMarks >= maxMaths && userEnghMarks >= userEnghMarks && maxCompSkills >= userCompMarks) {
		console.log("Passed");
	}else {
		console.log("Failed");
	}
}