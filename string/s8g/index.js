module.exports = function s8g(str) {
	if (str.length < 4) {
		return str;
	}

	return `${str[0]}${str.length - 2}${str.slice(-1)[0]}`;
};
