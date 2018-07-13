let userWithdrawal = 1000;
let currentBal = 20000;
let afterWithdrawal = userWithdrawal - currentBal;

if (userWithdrawal <= 20000) {
	console.log("Withdrawal Success! your new balance is ," + afterWithdrawal);
}else {
	console.log("Withdrawal Failed!! sorry you donot have sufficiuent balance");
}