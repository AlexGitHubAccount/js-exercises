module.exports = function getMonthMatrix(year, month) {
	const firstDate = new Date(year, month, 1);
	const lastDate = new Date(year, month + 1, 0);

	const array = Array(lastDate.getDate())
		.fill(null)
		.map((_, i) => i + 1);

	array.unshift(...Array((firstDate.getDay() || 7) - 1).fill(null));
	array.push(...Array(7 - (lastDate.getDay() || 7)).fill(null));

	const matrix = [];
	while (array.length) {
		matrix.push(array.splice(0, 7));
	}

	return matrix;
};
