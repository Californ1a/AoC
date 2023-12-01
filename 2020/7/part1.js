const readInput = require("../../lib/readFile");

function parseInput(input) {
	const regex = /(\d?) ?(\w+ \w+) bags?/g;
	const map = new Map();
	const newInput = [];
	input.forEach((line) => {
		const matches = line.match(regex);
		for (let i = 0; i < matches.length; i += 1) {
			let bag = matches[i].trim().split(" ");
			bag = bag.slice(0, bag.length - 1);
			let count = 0;
			if (bag.length === 3) {
				[count] = bag;
				bag = bag.slice(1).join(" ");
			}
			if (count) {
				matches[i] = {
					[bag]: count,
				};
			} else {
				matches[i] = bag.join(" ");
			}
		}
		// console.log(matches);
		newInput.push(matches);
	});
	newInput.forEach((line) => {
		// console.log(line);
		const [key] = line;
		let contained = line.slice(1);
		contained = contained.map((bag) => {
			if (bag === "no other") return bag;
			const m = new Map();
			const name = Object.keys(bag)[0];
			const count = parseInt(bag[name], 10);
			m.set(name, count);
			return m;
		});
		map.set(key, contained);
	});
	return map;
}

function puzzle(input) {
	return input;
}

readInput(__dirname, "sample.txt").then((input) => {
	const parsed = parseInput(input);
	const answer = puzzle(parsed);
	console.log(answer);
});
