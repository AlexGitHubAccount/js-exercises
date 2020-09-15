module.exports = function isRightBrackets(str) {
	const pairs = ["[]", "()", "{}", "<>"];

	let flag = true;

	while (flag) {
		flag = false;

		for (const pair of pairs) {
			if (str.includes(pair)) {
				str = str.split(pair).join("");
				flag = true;
			}
		}
	}

	return !Boolean(str.length);
};
