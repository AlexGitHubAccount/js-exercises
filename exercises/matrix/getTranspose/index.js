module.exports = function getTranspose(matrix) {
	const transpose = [];

	const rowsNumber = matrix.length;
	const columnsNumber = matrix[0].length;

	for (let i = 0; i < columnsNumber; i++) {
		const row = [];

		for (let j = 0; j < rowsNumber; j++) {
			row.push(matrix[j][i]);
		}

		transpose.push(row);
	}

	if (!transpose.length) {
		transpose.push([]);
	}

	return transpose;
};
