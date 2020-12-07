const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function puzzle(input) {
	const indicies = [];
	let num1;
	let num2;
	for (let i = 0; i < input.length; i += 1) {
		num1 = parseInt(input[i], 10);
		for (let j = i + 1; j < input.length - 1; j += 1) {
			num2 = parseInt(input[j], 10);
			console.log(`[CAL] i:${i} num1:${num1}, j:${j} num2:${num2}`);
			if (num1 + num2 === 2020) {
				indicies.push({
					i,
					num1,
					j,
					num2,
				});
			}
		}
	}
	return indicies;
}

readInput("input.txt").then((input) => {
	const answers = puzzle(input);
	answers.forEach((answer, i) => {
		const mult = answer.num1 * answer.num2;
		console.log(answer);
		console.log(`${i}: ${mult}`);
	});
});
