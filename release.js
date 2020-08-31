const fs = require("fs").promises;
const path = require("path");

const exercisesPath = path.join(__dirname, "/exercises/");
const content = "module.exports = ";

main();

async function main() {
	const indexFilePaths = await getIndexFilePaths(exercisesPath);

	await Promise.all(
		indexFilePaths.map((indexFilePath) => fs.writeFile(indexFilePath, content))
	);

	await fs.unlink(path.join(__dirname, "release.js"));
}

async function getIndexFilePaths(root = __dirname) {
	const filePaths = [];

	await getIndexFilePathsMaster(root);

	return filePaths;

	async function getIndexFilePathsMaster(root) {
		const dirents = await fs.readdir(root, { withFileTypes: true });

		const promises = [];
		for (const dirent of dirents) {
			if (dirent.isFile() && dirent.name === "index.js") {
				const filePath = path.join(root, "index.js");
				filePaths.push(filePath);
			}

			if (dirent.isDirectory()) {
				const newRoot = path.join(root, dirent.name);
				const promise = getIndexFilePathsMaster(newRoot);
				promises.push(promise);
			}
		}

		await Promise.all(promises);
	}
}
