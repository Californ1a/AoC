const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

function validNum(num, min, max) {
	return num >= min && num <= max;
}

const validator = {
	byr: (num) => validNum(num, 1920, 2002),
	iyr: (num) => validNum(num, 2010, 2020),
	eyr: (num) => validNum(num, 2020, 2030),
	hgt: (val) => {
		const check = /^(\d{2,3})(cm|in)$/.exec(val);
		if (!check) {
			return false;
		}
		const [, num, unit] = check;
		const n = parseInt(num, 10);
		if (unit === "cm") {
			return validNum(n, 150, 193);
		}
		if (unit === "in") {
			return validNum(n, 59, 76);
		}
		return false;
	},
	hcl: (val) => /^#[a-f0-9]{6}$/.test(val),
	ecl: (val) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(val),
	pid: (val) => /^\d{9}$/.test(val),
	cid: () => true,
};

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
	return input.filter((passport) => {
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

function validateKeys(input) {
	return input.filter((val) => {
		const keys = Object.keys(val);
		for (let i = 0; i < keys.length; i += 1) {
			const key = keys[i];
			const value = val[key];
			const validate = validator[key];
			const check = validate(value);
			if (!check) {
				return false;
			}
		}
		return true;
	});
}

readInput("input.txt").then((input) => {
	const parsed = parseInput(input);
	const validInput = validateInput(parsed);
	const answers = validateKeys(validInput);
	console.log(answers.length);
});
