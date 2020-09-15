module.exports = function isPalindrome(str) {
	if (str.length < 2) {
		return true;
	}

	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
	}

	return true;
};
