const fs = require("fs");
const path = require("path");

async function readInput(dirname, filename) {
	const input = await fs.promises.readFile(path.join(dirname, filename), "utf-8");
	return input.replace(/\r\n/g, "\n").trim().split("\n");
}

module.exports = readInput;
