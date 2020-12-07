const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function parseInput(input) {
	const arr = [];
	let obj = {};
	for (let i = 0; i < input.length; i += 1) {
		if (input[i] !== "") {
			const temp = input[i].split(" ");
			for (let j = 0; j < temp.length; j += 1) {
				const [, key, val] = /^(\w{3}):(.+)$/.exec(temp[j]);
				obj[key] = val;
			}
		} else {
			arr.push(obj);
			obj = {};
		}
		if (typeof input[i + 1] === "undefined") {
			arr.push(obj);
		}
	}
	return arr;
}

function validateInput(input) {
	const expected = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
	return input.map((passport) => {
		const keys = Object.keys(passport);
		let test = true;
		expected.forEach((e) => {
			if (!keys.includes(e)) {
				test = false;
			}
		});
		return test;
	});
}

readInput("input.txt").then((input) => {
	const parsed = parseInput(input);
	const answers = validateInput(parsed);
	const answer = answers.reduce((a, v) => ((v) ? a + v : a), 0);
	console.log(answer);
});
