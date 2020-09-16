const getTranspose = require("./index.js");

test("getTranspose 1", () => {
	const original = [[]];
	const result = [[]];

	expect(getTranspose(original)).toEqual(result);
});

test("getTranspose 2", () => {
	const original = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	const result = [
		[1, 4, 7],
		[2, 5, 8],
		[3, 6, 9],
	];

	expect(getTranspose(original)).toEqual(result);
});

test("getTranspose 3", () => {
	const original = [
		[1, 2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15, 16],
	];

	const result = [
		[1, 9],
		[2, 10],
		[3, 11],
		[4, 12],
		[5, 13],
		[6, 14],
		[7, 15],
		[8, 16],
	];

	expect(getTranspose(original)).toEqual(result);
});

test("getTranspose 4", () => {
	const original = [[1, 2, 3, 4, 5, 6, 7, 8]];
	const result = [[1], [2], [3], [4], [5], [6], [7], [8]];

	expect(getTranspose(original)).toEqual(result);
});

test("getTranspose 4", () => {
	const original = [[1], [2], [3], [4], [5], [6], [7], [8]];
	const result = [[1, 2, 3, 4, 5, 6, 7, 8]];

	expect(getTranspose(original)).toEqual(result);
});
