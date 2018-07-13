function add() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	let sum = numb1 + numb2;
	console.log(sum);
}

function difference() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	let result = numb1 - numb2;
	console.log(result);
}

function multiply() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	let result = numb1 * numb2;
	console.log(result);
}

function divide() {
	let numb1 = document.querySelector("#numb1").value;
	let numb2 = document.querySelector("#numb2").value;
	let result = numb1 / numb2;
	console.log(result);
}

function remainder() {
	let numb1 = document.querySelector("#numb1").value;
	let numb2 = document.querySelector("#numb2").value;
	let result = numb1 % numb2;
	console.log(result);
}