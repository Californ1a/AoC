const readInput = require("../../lib/readFile");

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
