let userYear = 2001;

if (userYear % 4 === 0) {
	console.log("Yes,leap year");
	if (userYear & 100 === 0) {
		console.log("Not a leap year");
		if (userYear % 400 === 0) {
			console.log("Leap year");
		}else {
            console.log("Not a leap year");
		}
	}else {
		console.log("Leap year");
	}
}else {
	console.log("Not a leap year");
}