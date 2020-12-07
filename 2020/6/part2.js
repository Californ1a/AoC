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
	let map = new Map();
	groups.forEach((g) => {
		g.forEach((person) => {
			person.split("").forEach((letter) => {
				if (map.has(letter)) {
					map.set(letter, map.get(letter) + 1);
				} else {
					map.set(letter, 1);
				}
			});
		});
		Array.from(map.keys()).forEach((letter) => {
			if (map.get(letter) !== g.length) {
				map.delete(letter);
			}
		});
		yesCount.push(map.size);
		map = new Map();
	});
	const sum = yesCount.reduce((a, v) => a + v);
	return sum;
}

readInput(__dirname, "input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
