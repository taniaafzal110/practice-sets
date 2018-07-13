let costOfApple = 10;
let costOfBanana = 15;
let costOfMango = 8;

function calculate() {
	let noOfApples =parseInt(document.querySelector("#apple").value);
	let noOfBananas =parseInt(document.querySelector("#banana").value);
	let noOfMangoes =parseInt(document.querySelector("#mango").value);
	let totalCost = costOfApple * noOfApples + costOfBanana * noOfBananas + costOfMango * noOfMangoes;
	console.log(totalCost);
}