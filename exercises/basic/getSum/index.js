module.exports = function getSum(...args) {
	return [...args, 0].reduce((a, b) => a + b);
};
