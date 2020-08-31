const capitalization = require("./index.js");

test("capitalization", () => {
	const pairs = [
		["", ""],
		["123", "123"],
		["1asdf", "1asdf"],
		["      \n\t     ", "      \n\t     "],
		["asdf", "Asdf"],
		["ASDF", "ASDF"],
		["HELLO", "HELLO"],
		["Hello", "Hello"],
		["hello", "Hello"],
		["123ASDF", "123ASDF"],
	];

	for (const [original, result] of pairs) {
		expect(capitalization(original)).toEqual(result);
	}
});
