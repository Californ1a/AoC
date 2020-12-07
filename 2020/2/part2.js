const readInput = require("../../lib/readFile");

function puzzle(input) {
	let sum = 0;
	input.forEach((line) => {
		const reg = /^(\d+)-(\d+) (\w): (.+)$/gi;
		const matches = reg.exec(line);
		const index1 = parseInt(matches[1], 10) - 1;
		const index2 = parseInt(matches[2], 10) - 1;
		const letter = matches[3];
		const password = matches[4];
		// console.log({
		// 	password,
		// 	letter,
		// 	index1: password[index1],
		// 	index2: password[index2],
		// });
		if (password[index1] === letter) {
			if (password[index2] !== letter) {
				sum += 1;
			}
		} else if (password[index2] === letter) {
			if (password[index1] !== letter) {
				sum += 1;
			}
		}
	});
	return sum;
}

readInput("input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
