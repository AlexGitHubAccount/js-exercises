module.exports = function generateMatrix(columns, rows, callback = () => null) {
	const array = [];

	for (let y = 0; y < rows; y++) {
		const row = [];

		for (let x = 0; x < columns; x++) {
			row.push(callback(x, y));
		}

		array.push(row);
	}

	return array;
};
