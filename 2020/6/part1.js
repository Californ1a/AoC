const readInput = require("../../lib/readFile");

function puzzle(input) {
	const groups = [];
	let group = [];
	input.forEach((line, i) => {
		if (line !== "") {
			group.push(line);
		} else {
			groups.push(group);
			group = [];
		}
		if (i === input.length - 1) {
			groups.push(group);
		}
	});
	const yesCount = [];
	let set = new Set();
	groups.forEach((g) => {
		g.forEach((person) => {
			person.split("").forEach((letter) => {
				set.add(letter);
			});
		});
		yesCount.push(set.size);
		set = new Set();
	});
	const sum = yesCount.reduce((a, v) => a + v);
	return sum;
}

readInput(__dirname, "input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
