const getSum = require("./index.js");

test("getSum", () => {
	expect(getSum()).toBe(0);
	expect(getSum(1, 2, 3, 4, 5)).toBe(15);
	expect(getSum(-1, 1, -1, 1, 5)).toBe(5);
	expect(getSum(-1, -2, -3, -4, -5)).toBe(-15);
	expect(getSum(100, 2000, 3)).toBe(2103);
});
