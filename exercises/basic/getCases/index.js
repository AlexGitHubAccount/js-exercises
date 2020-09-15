module.exports = function getCases(str) {
	let words = null;

	if (str.includes(" ")) {
		words = str.split(" ");
	} else if (str.includes("-")) {
		words = str.split("-");
	} else if (str.includes("_")) {
		words = str.split("_");
	} else {
		words = [];

		let word = "";
		for (const letter of str) {
			if (letter === letter.toUpperCase() && letter !== letter.toLowerCase()) {
				words.push(word);
				word = "";
			}

			word += letter;
		}

		if (word) {
			words.push(word);
		}
	}

	words = words.map((x) => x.toLowerCase());

	return [
		words.reduce((a, b) => a + b[0].toUpperCase() + b.slice(1)),
		words.join("_"),
		words.join("-"),
	];
};
