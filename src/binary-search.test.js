import {binarySearch} from './binary-search';

describe('Binary Search', () => {
	const testArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
	it('should return -1 for an empty array', () => {
		expect(binarySearch([], 1)).toBe(-1);
	});
	it('should find the correct index if target is on the first half', () => {
		expect(binarySearch(testArray, 13)).toBe(5);
	});
	it('should find the correct index if target is on the second half', () => {
		expect(binarySearch(testArray, 73)).toBe(20);
	});
	it('should return -1 element is not found in array', () => {
		expect(binarySearch(testArray, 12)).toBe(-1);
	});
});