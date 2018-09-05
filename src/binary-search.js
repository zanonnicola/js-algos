const binarySearch = (sortedArray, element) => {
	let min = 0; // The current minimum reasonable guess for this round
	let max = sortedArray.length - 1; // The current maximum reasonable guess.
	let guess;
	let i = sortedArray.length;

	if (sortedArray.length === 0) {
		return -1;
	}
	while (i > 0) {
		guess = Math.floor((min + max) / 2);

		// Exit conditions
		if (max < min) {
			return -1; // Element is not present in array
		}
		if (sortedArray[guess] === element) {
			return guess;
		}

		// Logic
		if (sortedArray[guess] < element) {
			min = guess + 1; // The guess was too low
		} else if (sortedArray[guess] > element) {
			max = guess - 1; // The guess was too high
		}
		i--;
	}
};

export {binarySearch};
