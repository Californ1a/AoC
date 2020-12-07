const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function puzzle(input) {
	let sum = 0;
	input.forEach((line) => {
		const reg = /^(\d+)-(\d+) (\w): (.+)$/gi;
		const matches = reg.exec(line);
		const minimum = matches[1];
		const maximum = matches[2];
		const letter = matches[3];
		const password = matches[4];
		const regex = new RegExp(letter, "gi");
		const letters = password.match(regex);
		if (letters) {
			const passTest = letters.length >= minimum && letters.length <= maximum;
			if (passTest) {
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
