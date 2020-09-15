const getNextItem = require("./index.js");

test("getNextItem fruits", () => {
	expect(getNextItem("apply", ["apply", "pear", "orange", "corn"])).toEqual(
		"pear"
	);
	expect(getNextItem("pear", ["apply", "pear", "orange", "corn"])).toEqual(
		"orange"
	);
	expect(getNextItem("orange", ["apply", "pear", "orange", "corn"])).toEqual(
		"corn"
	);
	expect(getNextItem("corn", ["apply", "pear", "orange", "corn"])).toEqual(
		"apply"
	);
});

test("getNextItem alphabet", () => {
	expect(getNextItem("a", ["a", "b"])).toEqual("b");
	expect(getNextItem("b", ["a", "b"])).toEqual("a");
});

test("getNextItem from one", () => {
	expect(getNextItem(" ", [" "])).toEqual(" ");
});
