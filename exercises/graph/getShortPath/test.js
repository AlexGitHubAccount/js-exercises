const getShortPath = require("./index.js");

const rightPath = (schedule, path) => {
	for (let i = 0; i < path.length - 1; i++) {
		const fromPoint = path[i];
		const toPoint = path[i + 1];
		const trip = schedule[fromPoint][toPoint];

		expect(trip).toEqual(true);
	}
};

describe("getShortPath", () => {
	describe("self", () => {
		const paths = [
			[0, 0],
			[13, 13],
		];

		for (const [fromPoint, toPoint] of paths) {
			test(`${fromPoint} -> ${toPoint}`, () => {
				const path = getShortPath(fromPoint, toPoint);
				expect(path.length).toEqual(0);
			});
		}
	});

	describe("Not Exists", () => {
		const schedule = [
			[true, false, false],
			[false, true, false],
			[false, false, true],
		];

		const paths = [
			[0, 2],
			[2, 1],
		];

		for (const [fromPoint, toPoint] of paths) {
			test(`${fromPoint} -> ${toPoint}`, () => {
				const path = getShortPath(fromPoint, toPoint, schedule);
				expect(path).toEqual(false);
			});
		}
	});

	describe("graph_1", () => {
		const schedule = [
			[false, true, true, false],
			[true, false, true, true],
			[true, true, false, true],
			[false, true, true, false],
		];

		const paths = [
			[0, 3, 3],
			[1, 3, 2],
			[3, 0, 3],
		];

		for (const [fromPoint, toPoint, pathLength] of paths) {
			test(`${fromPoint} -> ${toPoint}`, () => {
				const path = getShortPath(fromPoint, toPoint, schedule);
				expect(path.length).toEqual(pathLength);
				rightPath(schedule, path);
			});
		}
	});

	describe("graph_2", () => {
		// prettier-ignore
		const schedule = [
            [false, true, true, false, true, false, false, false, false, false, false, false],
            [true, false, false, true, true, false, false, false, false, false, false, false],
            [true, false, false, false, false, true, false, false, true, false, false, false],
            [false, true, false, false, false, false, false, true, false, false, false, false],
            [true, true, false, false, false, false, false, true, false, true, false, false],
            [false, false, true, false, false, false, true, false, false, false, false, false],
            [false, false, false, false, false, true, false, false, false, false, false, false],
            [false, false, false, true, true, false, false, false, false, false, true, false],
            [false, false, true, false, false, false, false, false, false, true, false, true],
            [false, false, false, false, true, false, false, false, true, false, true, true],
            [false, false, false, false, false, false, false, true, false, true, false, false],
            [false, false, false, false, false, false, false, false, true, true, false, false],
        ];

		const paths = [
			[0, 1, 2],
			[0, 3, 3],
			[0, 6, 4],
			[4, 6, 5],
			[5, 10, 5],
			[3, 9, 4],
			[8, 4, 3],
		];

		for (const [fromPoint, toPoint, pathLength] of paths) {
			test(`${fromPoint} -> ${toPoint}`, () => {
				const path = getShortPath(fromPoint, toPoint, schedule);
				expect(path.length).toEqual(pathLength);
				rightPath(schedule, path);
			});
		}
	});
});
