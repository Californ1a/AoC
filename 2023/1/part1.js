const readInput = require('../../lib/readFile');

function puzzle(input) {
	const numbers = [];
	for (const line of input) {
		const chars = line.split('');
		let numStr = '';
		for (const char of chars) {
			if (Number.isNaN(parseInt(char, 10))) continue;
			numStr += char;
			break;
		}
		for (let i = chars.length - 1; i >= 0; i -= 1) {
			if (Number.isNaN(parseInt(chars[i], 10))) continue;
			numStr += chars[i];
			break;
		}
		numbers.push(parseInt(numStr, 10));
	}
	return numbers.reduce((acc, cur) => acc + cur);
}

readInput(__dirname, 'input.txt').then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
