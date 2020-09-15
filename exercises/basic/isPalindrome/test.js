const isPalindrome = require("./index.js");

describe("isPalindrome", () => {
	test("rights", () => {
		expect(isPalindrome("")).toBe(true);
		expect(isPalindrome("a")).toBe(true);
		expect(isPalindrome("1")).toBe(true);
		expect(isPalindrome("11")).toBe(true);
		expect(isPalindrome("121")).toBe(true);
		expect(isPalindrome("1221")).toBe(true);
		expect(isPalindrome("12321")).toBe(true);
		expect(isPalindrome("123321")).toBe(true);
		expect(isPalindrome("1231321")).toBe(true);
		expect(isPalindrome("aaaa")).toBe(true);
		expect(isPalindrome("baabaab")).toBe(true);
	});

	test("wrongs", () => {
		expect(isPalindrome("11_")).toBe(false);
		expect(isPalindrome("12_1")).toBe(false);
		expect(isPalindrome("12_a21")).toBe(false);
		expect(isPalindrome("12_321")).toBe(false);
		expect(isPalindrome("12_3321")).toBe(false);
		expect(isPalindrome("12_31321")).toBe(false);
		expect(isPalindrome("aa_ba")).toBe(false);
		expect(isPalindrome("ba_abaab")).toBe(false);
	});
});
