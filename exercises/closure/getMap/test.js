const getMap = require("./index.js");

const persons = [
	{ id: 1, name: "Алексей", surname: "Данчин" },
	{ id: 2, name: "Олег", surname: "Песков" },
	{ id: 3, name: "Татьяна", surname: "Мельник" },
	{ id: 4, name: "Олег", surname: "Тинькофф" },
	{ id: 5, name: "Мария", surname: "Вевелон" },
];

test("getMap('name')", () => {
	const getNames = getMap("name");
	const names = getNames(persons);

	expect(names.length).toBe(5);
	expect(names.includes("Алексей")).toBe(true);
	expect(names.includes("Олег")).toBe(true);
	expect(names.includes("Татьяна")).toBe(true);
	expect(names.includes("Олег")).toBe(true);
	expect(names.includes("Мария")).toBe(true);
});

test("getMap('id')", () => {
	const getIds = getMap("id");
	const ids = getIds(persons);

	expect(ids.length).toBe(5);
	expect(ids.includes(1)).toBe(true);
	expect(ids.includes(2)).toBe(true);
	expect(ids.includes(3)).toBe(true);
	expect(ids.includes(4)).toBe(true);
	expect(ids.includes(5)).toBe(true);
});

test("getMap('surname')", () => {
	const getSurnames = getMap("surname");
	const surnames = getSurnames(persons);

	expect(surnames.length).toBe(5);
	expect(surnames.includes("Данчин")).toBe(true);
	expect(surnames.includes("Песков")).toBe(true);
	expect(surnames.includes("Мельник")).toBe(true);
	expect(surnames.includes("Тинькофф")).toBe(true);
	expect(surnames.includes("Вевелон")).toBe(true);
});
