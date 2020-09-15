const getCases = require("./index.js");

test("getCase 1", () => {
	for (const str of ["my name", "myName", "my_name", "my-name"]) {
		const cases = getCases(str);

		expect(cases.length).toBe(3);
		expect(cases.includes("myName")).toBe(true);
		expect(cases.includes("my_name")).toBe(true);
		expect(cases.includes("my-name")).toBe(true);
	}
});

test("getCase 2", () => {
	const cases = getCases("у меня так много идей");

	expect(cases.length).toBe(3);

	expect(cases.includes("уМеняТакМногоИдей")).toBe(true);
	expect(cases.includes("у_меня_так_много_идей")).toBe(true);
	expect(cases.includes("у-меня-так-много-идей")).toBe(true);
});

test("getCase 3", () => {
	const cases = getCases("a b c d");

	expect(cases.length).toBe(3);

	expect(cases.includes("aBCD")).toBe(true);
	expect(cases.includes("a_b_c_d")).toBe(true);
	expect(cases.includes("a-b-c-d")).toBe(true);
});

test("getCase 4", () => {
	for (const str of ["aBCD", "a_b_c_d", "a-b-c-d", "a b c d"]) {
		const cases = getCases(str);

		expect(cases.length).toBe(3);

		expect(cases.includes("aBCD")).toBe(true);
		expect(cases.includes("a_b_c_d")).toBe(true);
		expect(cases.includes("a-b-c-d")).toBe(true);
	}
});
