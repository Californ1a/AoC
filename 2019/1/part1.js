const readInput = require("../../lib/readFile");

function puzzle(input) {
	return input.reduce((a, v) => a + (Math.floor(v / 3) - 2), 0);
}

readInput(__dirname, "input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
