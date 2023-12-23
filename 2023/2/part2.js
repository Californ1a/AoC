const readInput = require('../../lib/readFile');

function puzzle(input) {
	let sum = 0;
	for (const line of input) {
		// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
		const [, remaining] = line.split(': ');
		const sets = remaining.split('; ');
		const maximums = {};
		for (const set of sets) {
			const colors = set.split(', ');
			for (const color of colors) {
				const [number, colorName] = color.split(' ');
				if (maximums[colorName]) {
					maximums[colorName] = Math.max(
						maximums[colorName],
						parseInt(number, 10),
					);
				} else {
					maximums[colorName] = parseInt(number, 10);
				}
			}
		}
		sum += Object.keys(maximums)
			.map((key) => maximums[key])
			.reduce((a, b) => a * b, 1);
	}
	return sum;
}

readInput(__dirname, 'input.txt').then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
