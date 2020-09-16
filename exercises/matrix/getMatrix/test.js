const getMatrix = require("./index.js");

test("getMatrix(1, 1)", () => {
	expect(getMatrix(1, 1)).toEqual([[null]]);
});

test("getMatrix(3, 5)", () => {
	expect(getMatrix(3, 5)).toEqual([
		[null, null, null],
		[null, null, null],
		[null, null, null],
		[null, null, null],
		[null, null, null],
	]);
});

test("getMatrix(1, 5)", () => {
	expect(getMatrix(1, 5)).toEqual([[null], [null], [null], [null], [null]]);
});

test("getMatrix(5, 1)", () => {
	expect(getMatrix(5, 1)).toEqual([[null, null, null, null, null]]);
});
