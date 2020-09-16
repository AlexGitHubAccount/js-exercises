const getDoubleFunction = require("./index");

test("getDoubleFunction 1", () => {
	let counter = 0;
	const count = getDoubleFunction(() => counter++);

	count();
	expect(counter).toBe(2);

	count();
	expect(counter).toBe(4);

	count();
	expect(counter).toBe(6);
});

test("getDoubleFunction 2", () => {
	const array = [];
	const push = getDoubleFunction(() => array.push(array.length));

	push();
	expect(array).toEqual([0, 1]);

	push();
	expect(array).toEqual([0, 1, 2, 3]);

	push();
	expect(array).toEqual([0, 1, 2, 3, 4, 5]);
});

test("getDoubleFunction 3", () => {
	let flag = true;

	const doubleToggle = getDoubleFunction(() => (flag = !flag));

	doubleToggle();
	expect(flag).toBe(true);

	doubleToggle();
	expect(flag).toBe(true);

	doubleToggle();
	expect(flag).toBe(true);
});

test("getDoubleFunction 4", () => {
	const getSum = (...args) => args.reduce((a, b) => a + b, 0);
	const getDoubleSum = getDoubleFunction(getSum);

	expect(getDoubleSum()).toBe(0);
	expect(getDoubleSum(1, 2, 3)).toBe(6);
	expect(getDoubleSum(1, 2, 3, 4, 5)).toBe(15);

	expect(getDoubleSum(-1, 1, -1, 1)).toBe(0);
	expect(getDoubleSum(-100, 200)).toBe(100);
	expect(getDoubleSum(Math.PI, -1)).toBe(Math.PI - 1);
	expect(getDoubleSum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(10);
});
