const s8g = require("./index.js");

test("s8g", () => {
	const pairs = [
		["", ""],
		[" ", " "],
		["   ", "   "],
		["    ", " 2 "],
		["123", "123"],
		["1 3", "1 3"],
		["солнце", "с4е"],
		["Cолнце", "C4е"],
		["солнцЕ", "с4Е"],
		["сОЛНЦе", "с4е"],
		["translation", "t9n"],
	];

	for (const [origin, result] of pairs) {
		expect(s8g(origin)).toEqual(result);
	}
});
