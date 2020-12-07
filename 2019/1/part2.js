const readInput = require("../../lib/readFile");

function massToFuel(mass) {
	return (Math.floor(mass / 3) - 2);
}

function puzzle(input) {
	const ans = [];
	input.forEach((v) => {
		const m = [];
		let fuel = massToFuel(v);
		m.push(fuel);
		if (fuel > 5) {
			while (fuel > 5) {
				const f = massToFuel(fuel);
				m.push(f);
				fuel = f;
			}
		}
		const sum = m.reduce((a, val) => a + val);
		ans.push(sum);
		// if (m.some(v => v <= 0)) {
		// 	console.log(m);
		// }
	});
	return ans.reduce((a, v) => a + v);
}

readInput(__dirname, "input.txt").then((input) => {
	const answer = puzzle(input);
	console.log(answer);
});
