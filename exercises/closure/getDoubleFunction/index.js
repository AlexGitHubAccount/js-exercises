module.exports = function getDoubleFunction(fun) {
	return function (...args) {
		fun(...args);
		return fun(...args);
	};
};
