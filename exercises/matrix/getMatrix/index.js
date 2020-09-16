module.exports = function getMatrix(columns, rows) {
	return Array(rows)
		.fill()
		.map(() => Array(columns).fill(null));
};
