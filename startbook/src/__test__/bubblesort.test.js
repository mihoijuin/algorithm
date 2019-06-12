import { bubblesort } from '../bubblesort';

let testArr = [1, 5, 7, 2, 3, 9, 4, 6, 8];
const expectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
test('bubble sort', () => {
	expect(bubblesort(testArr)).toStrictEqual(expectArr);
});
