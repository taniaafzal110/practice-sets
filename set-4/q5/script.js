let totalMarks = 1050;

function calPercentage() {
	let userMarks = document.querySelector("input").value;
	let percentage = userMarks / totalMarks * 100;
	console.log(percentage);
}