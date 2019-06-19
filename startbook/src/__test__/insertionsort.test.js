import { insertionSort } from '../insertion-sort';

let testArr = [1, 5, 7, 2, 3, 9, 4, 6, 8];
const expectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
test('insertion sort', () => {
	expect(insertionSort(testArr)).toStrictEqual(expectArr);
});
