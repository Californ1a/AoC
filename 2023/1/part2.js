const readInput = require('../../lib/readFile');

function getNumbers(input) {
	const numberWords = {
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};
	const result = [];
	const chars = input.split('');
	for (let i = 0; i < chars.length; i += 1) {
		if (Number.isNaN(parseInt(chars[i], 10))) {
			const numStrs = Object.keys(numberWords);
			for (const num of numStrs) {
				const strSliced = input.slice(i, num.length + i);
				// console.log(input, i, num.length, strSliced, strSliced !== num, numberWords[num]);
				if (strSliced !== num) continue;
				result.push(numberWords[num]);
			}
		} else {
			result.push(parseInt(chars[i], 10));
		}
		// console.log(result);
	}
	return result;
}

function puzzle(input) {
	const numbers = [];
	for (const line of input) {
		const nums = getNumbers(line);
		// console.log(nums);
		numbers.push(parseInt(`${nums[0]}${nums[nums.length - 1]}`, 10));
	}
	return numbers.reduce((acc, cur) => acc + cur);
}

readInput(__dirname, 'input.txt').then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
