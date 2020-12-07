const readInput = require("../../lib/readFile");

function abc(element, arr, lower, upper) {
	let a = arr;
	// console.log(v);
	if (element === lower) {
		a = arr.slice(0, arr.length / 2);
		// console.log("F");
	} else if (element === upper) {
		a = arr.slice(arr.length / 2, arr.length);
		// console.log("B");
	}
	// console.log(arr.length);
	if (a.length === 1) {
		return a[0];
	}
	return a;
}

function puzzle(input) {
	const seatIDs = [];
	input.forEach((line) => {
		let arr = Array(128).fill().map((_, i) => i);
		const row = line.substring(0, 7);
		const col = line.substring(7, line.length);
		const rowNum = row.split("").reduce((a, v) => abc(v, a || arr, "F", "B"), 0);
		arr = Array(8).fill().map((_, i) => i);
		const colNum = col.split("").reduce((a, v) => abc(v, a || arr, "L", "R"), 0);
		// console.log(row, rowNum, col, colNum);
		seatIDs.push(rowNum * 8 + colNum);
	});
	return seatIDs;
}

readInput("input.txt").then((input) => {
	const seats = puzzle(input);
	const sortedSeats = seats.sort((a, b) => a - b);
	const a = [];
	sortedSeats.forEach((seat, i) => {
		if (seat !== i + 80) {
			a.push([seat, i]);
		}
	});
	console.log(a);
	console.log(sortedSeats.slice(560, 564));
});
