module.exports = function getNextItem(item, array) {
	let index = array.indexOf(item) + 1;

	if (index === array.length) {
		index = 0;
	}

	return array[index];
};
