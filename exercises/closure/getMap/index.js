module.exports = function getMap(field) {
	return function (array) {
		return array.map((x) => x[field]);
	};
};
