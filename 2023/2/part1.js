const readInput = require('../../lib/readFile');

const limits = {
	red: 12,
	green: 13,
	blue: 14,
};

function puzzle(input) {
	let possibleSum = 0;
	for (const line of input) {
		// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
		const [game, remaining] = line.split(': ');
		const gameNumber = parseInt(game.split(' ')[1], 10);
		let gamePossible = true;
		const sets = remaining.split('; ');
		for (const set of sets) {
			const colors = set.split(', ');
			let colorPossible = true;
			for (const color of colors) {
				const [number, colorName] = color.split(' ');
				if (number <= limits[colorName]) continue;
				colorPossible = false;
			}
			if (colorPossible) continue;
			gamePossible = false;
		}
		if (!gamePossible) continue;
		possibleSum += gameNumber;
	}
	return possibleSum;
}

readInput(__dirname, 'input.txt').then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
