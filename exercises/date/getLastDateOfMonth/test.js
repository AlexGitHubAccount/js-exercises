const getLastDateOfMonth = require("./index.js");

test("getLastDateOfMonth: August 2020", () => {
	const date = getLastDateOfMonth(2020, 7);

	expect(date.getFullYear()).toEqual(2020);
	expect(date.getMonth()).toEqual(7);
	expect(date.getDate()).toEqual(31);
});

test("getLastDateOfMonth: April 2001", () => {
	const date = getLastDateOfMonth(2001, 3);

	expect(date.getFullYear()).toEqual(2001);
	expect(date.getMonth()).toEqual(3);
	expect(date.getDate()).toEqual(30);
});

test("getLastDateOfMonth: September 2500", () => {
	const date = getLastDateOfMonth(2500, 8);

	expect(date.getFullYear()).toEqual(2500);
	expect(date.getMonth()).toEqual(8);
	expect(date.getDate()).toEqual(30);
});
