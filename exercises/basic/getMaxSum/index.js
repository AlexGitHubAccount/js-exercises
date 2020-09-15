module.exports = function getMaxSum(array, n) {
	return array
		.sort((a, b) => a - b)
		.slice(-n)
		.reduce((a, b) => a + b);
};
