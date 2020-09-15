const isRightBrackets = require("./index.js");

describe("isRightBrackets", () => {
	test("rights", () => {
		expect(isRightBrackets("[]")).toBe(true);
		expect(isRightBrackets("()")).toBe(true);
		expect(isRightBrackets("{}")).toBe(true);
		expect(isRightBrackets("<>")).toBe(true);
		expect(isRightBrackets("[()]")).toBe(true);
		expect(isRightBrackets("<><>()[]")).toBe(true);
		expect(isRightBrackets("[[][]]")).toBe(true);
		expect(isRightBrackets("([()])")).toBe(true);
		expect(isRightBrackets("<<[]()<>>>")).toBe(true);
		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]]}}}()"
			)
		).toBe(true);
	});

	test("wrong", () => {
		expect(isRightBrackets("[")).toBe(false);
		expect(isRightBrackets(")(")).toBe(false);
		expect(isRightBrackets("[(])")).toBe(false);
		expect(isRightBrackets("[[(<)]]")).toBe(false);
		expect(isRightBrackets("<>>")).toBe(false);
		expect(isRightBrackets("[(][][)]")).toBe(false);

		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{}}}>>>)))]]]]][[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]]}}}()"
			)
		).toBe(false);

		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{}}}>>>)))]]]]]}}}()"
			)
		).toBe(false);

		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]]}}})"
			)
		).toBe(false);

		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{(}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]]}}}()"
			)
		).toBe(false);

		expect(
			isRightBrackets(
				"(){{{[[[[[(((<<<{{{(}}}>>>)))]]]]][[[[[(((<<<{{{)}}}>>>)))]]]]][[[[[(((<<<{{{}}}>>>)))]]]]]}}}()"
			)
		).toBe(false);
	});
});
