const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function puzzle(input) {
	return input.reduce((a, v) => a + (Math.floor(v / 3) - 2), 0);
}

readInput("input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
