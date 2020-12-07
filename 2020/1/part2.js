const readInput = require("../../lib/readFile");

function puzzle(input) {
	const indicies = [];
	let num1;
	let num2;
	let num3;
	for (let i = 0; i < input.length; i += 1) {
		num1 = parseInt(input[i], 10);
		for (let j = i + 1; j < input.length - 1; j += 1) {
			num2 = parseInt(input[j], 10);
			for (let k = j + 1; k < input.length - 1; k += 1) {
				num3 = parseInt(input[k], 10);
				console.log(`[CAL] i:${i} num1:${num1}, j:${j} num2:${num2}, k:${k} num3:${num3}`);
				if (num1 + num2 + num3 === 2020) {
					indicies.push({
						i,
						num1,
						j,
						num2,
						k,
						num3,
					});
				}
			}
		}
	}
	return indicies;
}

readInput("input.txt").then((input) => {
	const answers = puzzle(input);
	answers.forEach((answer, i) => {
		const mult = answer.num1 * answer.num2 * answer.num3;
		console.log(answer);
		console.log(`${i}: ${mult}`);
	});
});
