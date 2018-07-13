 let logIn = true;

function isLogged() {
	let userName = document.querySelector("input").value;

	if (logIn === true) {
		console.log("Welcome," + userName);
	} else {
		console.log("plz log in to continue");
	}
}