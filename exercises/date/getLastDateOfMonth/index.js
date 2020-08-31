module.exports = function getLastDateOfMonth(year, month) {
	return new Date(year, month + 1, 0);
};
