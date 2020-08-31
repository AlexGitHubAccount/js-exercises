const getMonthMatrix = require("./index.js");

test("getMonthMatrix: August 2020", () => {
	const matrix = getMonthMatrix(2020, 7);

	expect(matrix).toEqual([
		[null, null, null, null, null, 1, 2],
		[3, 4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31, null, null, null, null, null, null],
	]);
});

test("getMonthMatrix: April 2001", () => {
	const matrix = getMonthMatrix(2001, 3);

	expect(matrix).toEqual([
		[null, null, null, null, null, null, 1],
		[2, 3, 4, 5, 6, 7, 8],
		[9, 10, 11, 12, 13, 14, 15],
		[16, 17, 18, 19, 20, 21, 22],
		[23, 24, 25, 26, 27, 28, 29],
		[30, null, null, null, null, null, null],
	]);
});

test("getMonthMatrix: September 2500", () => {
	const matrix = getMonthMatrix(2500, 8);

	expect(matrix).toEqual([
		[null, null, 1, 2, 3, 4, 5],
		[6, 7, 8, 9, 10, 11, 12],
		[13, 14, 15, 16, 17, 18, 19],
		[20, 21, 22, 23, 24, 25, 26],
		[27, 28, 29, 30, null, null, null],
	]);
});

test("getMonthMatrix: Май 2021", () => {
	const matrix = getMonthMatrix(2021, 4);

	expect(matrix).toEqual([
		[null, null, null, null, null, 1, 2],
		[3, 4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16],
		[17, 18, 19, 20, 21, 22, 23],
		[24, 25, 26, 27, 28, 29, 30],
		[31, null, null, null, null, null, null],
	]);
});
