const getFirstDateOfMonth = require("./index.js");

test("getFirstDateOfMonth: August 2020", () => {
	const date = getFirstDateOfMonth(2020, 7);

	expect(date.getFullYear()).toEqual(2020);
	expect(date.getMonth()).toEqual(7);
	expect(date.getDate()).toEqual(1);
});

test("getFirstDateOfMonth: April 2001", () => {
	const date = getFirstDateOfMonth(2001, 3);

	expect(date.getFullYear()).toEqual(2001);
	expect(date.getMonth()).toEqual(3);
	expect(date.getDate()).toEqual(1);
});

test("getFirstDateOfMonth: September 2500", () => {
	const date = getFirstDateOfMonth(2500, 8);

	expect(date.getFullYear()).toEqual(2500);
	expect(date.getMonth()).toEqual(8);
	expect(date.getDate()).toEqual(1);
});
