const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function puzzle(input, across, down = 1) {
	let a = across;
	let treeCount = 0;
	for (let i = down; i < input.length; i += down) {
		const line = input[i];
		// console.log({
		// 	across: a,
		// 	down,
		// 	mod: a % line.length,
		// 	line,
		// 	char: line[a % line.length],
		// });
		if (line[a % line.length] === "#") {
			treeCount += 1;
		}
		a += across;
	}
	return treeCount;
}

const func = (i) => (a, d) => puzzle(i, a, d);

readInput("input.txt").then((input) => {
	const p = func(input);
	const answers = [p(1, 1), p(3, 1), p(5, 1), p(7, 1), p(1, 2)];
	console.log(answers);
	const answer = answers.reduce((v, a) => v * a, 1);
	console.log(answer);
});
