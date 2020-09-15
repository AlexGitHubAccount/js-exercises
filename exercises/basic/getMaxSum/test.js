const getMaxSum = require("./index.js");

test("getSum right 1", () => {
	expect(getMaxSum([-1, 0, 1], 1)).toBe(1);
	expect(getMaxSum([-1, 0, 1], 2)).toBe(1);
	expect(getMaxSum([-1, 0, 1], 3)).toBe(0);
});

test("getSum right 2", () => {
	expect(getMaxSum([5, 1, 4, 2, 3], 1)).toBe(5);
	expect(getMaxSum([5, 1, 4, 2, 3], 2)).toBe(9);
	expect(getMaxSum([5, 1, 4, 2, 3], 3)).toBe(12);
	expect(getMaxSum([5, 1, 4, 2, 3], 4)).toBe(14);
	expect(getMaxSum([5, 1, 4, 2, 3], 5)).toBe(15);
});

test("getSum wrong", () => {
	for (let i = 0; i < 100; i++) {
		const size = getRandomBetween(1, 100);
		const array = Array(size)
			.fill(null)
			.map(() => getRandomBetween(-1000, 1000));
		const asc = array.slice().sort((a, b) => a - b);

		for (let i = 1; i <= size; i++) {
			expect(getMaxSum(array, i)).toBe(sumOf(asc, i));
		}
	}
});

function getRandomBetween(min, max) {
	return min + Math.floor(Math.random() * (max - min + 1));
}

function sumOf(array, n) {
	return array.slice(-n).reduce((a, b) => a + b);
}
