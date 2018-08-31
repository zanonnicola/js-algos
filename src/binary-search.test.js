import {binarySearch} from './binary-search';

describe('Binary Search', () => {
	it('should search number in sorted array', () => {
		expect(binarySearch([], 1)).toBe(-1);
	});
});