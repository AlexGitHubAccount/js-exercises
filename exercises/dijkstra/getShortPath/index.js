module.exports = function getShortPath(startPoint, finishPoint, schedule) {
	if (startPoint === finishPoint) {
		return [];
	}

	let shortPath = null;

	getShortPathMaster([startPoint]);

	return shortPath || false;

	function getShortPathMaster(path, checked = []) {
		const currentPoint = path.slice(-1)[0];
		checked.push(currentPoint);

		if (currentPoint === finishPoint) {
			if (!shortPath || shortPath.length > path.length) {
				shortPath = path;
			}

			return;
		}

		for (let toPoint = 0; toPoint < schedule[currentPoint].length; toPoint++) {
			if (checked.includes(toPoint)) {
				continue;
			}

			if (schedule[currentPoint][toPoint]) {
				getShortPathMaster([...path, toPoint], [...checked]);
			}
		}
	}
};
