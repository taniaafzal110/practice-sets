let maxSpeed = 60;

function checkSpeed() {
	let userSpeed = document.querySelector("input").value;

	if (userSpeed > 60) {
		console.log("OVERSPEEDING");
	}else {
		console.log("NOT OVERSPEEDING");
	}

}