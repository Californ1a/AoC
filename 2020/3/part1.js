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
		if (line[a % line.length] === "#") {
			treeCount += 1;
		}
		a += 3;
	}
	return treeCount;
}

readInput("input.txt").then((input) => {
	const answer = puzzle(input, 3);
	console.log(answer);
});
