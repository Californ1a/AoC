const fs = require("fs");
const path = require("path");

async function readInput(filename) {
	const input = await fs.promises.readFile(path.join(__dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

module.exports = readInput;
