const generateMatrix = require("./index.js");

describe("Empty matrix", () => {
	test("generateMatrix 1", () => {
		expect(generateMatrix(3, 5)).toEqual([
			[null, null, null],
			[null, null, null],
			[null, null, null],
			[null, null, null],
			[null, null, null],
		]);
	});

	test("generateMatrix 2", () => {
		expect(generateMatrix(1, 5)).toEqual([
			[null],
			[null],
			[null],
			[null],
			[null],
		]);
	});

	test("generateMatrix 3", () => {
		expect(generateMatrix(6, 1)).toEqual([
			[null, null, null, null, null, null],
		]);
	});
});

describe("Unit matrix", () => {
	const generator = (x, y) => (x === y ? 1 : 0);

	test("generateMatrix 1", () => {
		expect(generateMatrix(1, 1, generator)).toEqual([[1]]);
	});

	test("generateMatrix 2", () => {
		expect(generateMatrix(4, 4, generator)).toEqual([
			[1, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1],
		]);
	});
});

describe("Upper triangle", () => {
	const generator = (x, y) => (x >= y ? 1 : 0);

	test("generateMatrix 1", () => {
		expect(generateMatrix(1, 1, generator)).toEqual([[1]]);
	});

	test("generateMatrix 2", () => {
		expect(generateMatrix(3, 3, generator)).toEqual([
			[1, 1, 1],
			[0, 1, 1],
			[0, 0, 1],
		]);
	});

	test("generateMatrix 3", () => {
		expect(generateMatrix(10, 4, generator)).toEqual([
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
			[0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
		]);
	});
});

describe("Sum of coordinates", () => {
	const generator = (x, y) => x + y;

	test("generateMatrix 1", () => {
		expect(generateMatrix(1, 1, generator)).toEqual([[0]]);
	});

	test("generateMatrix 2", () => {
		expect(generateMatrix(3, 5, generator)).toEqual([
			[0, 1, 2],
			[1, 2, 3],
			[2, 3, 4],
			[3, 4, 5],
			[4, 5, 6],
		]);
	});
});

test("Chess", () => {
	expect(generateMatrix(8, 8, (x, y) => !Boolean((x + y) % 2))).toEqual([
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
		[true, false, true, false, true, false, true, false],
		[false, true, false, true, false, true, false, true],
	]);
});

test("Cooridants", () => {
	expect(generateMatrix(3, 2, (x, y) => `(${x};${y})`)).toEqual([
		["(0;0)", "(1;0)", "(2;0)"],
		["(0;1)", "(1;1)", "(2;1)"],
	]);
});
