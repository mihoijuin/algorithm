import { main } from '../quicksort';

let testArr = [
	[9, 5, 7, 1, 3, 2, 4, 6, 8],
	[1, 2, 5, 7, 3, 4, 6, 8, 9],
	[1, 2, 3, 4, 5, 6, 7, 8, 9],
	[9, 8, 7, 6, 5, 4, 3, 2, 1]
];
const expectArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
testArr.forEach(function(element) {	
	test('quick sort', () => {
		expect(main(0, element.length-1,element)).toStrictEqual(expectArr);
	});
});
