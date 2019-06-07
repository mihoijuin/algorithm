import { calcHash, createHashTable, hashing } from '../hash';

test('calc hash', () => {
	expect(calcHash(10, 11)).toBe(10);
});

test('calc hash collision', () => {
	expect(calcHash(10+1, 11)).toBe(0);
});

test('hash table', () => {
	expect(createHashTable()[0]).toBe(42);
});

test('hashing', () => {
	const arrayH = createHashTable();
	expect(hashing(42, arrayH)).toBe(0);
	expect(hashing(111, arrayH)).toBe(null);
});

test('show result', () => {
        expect(isNaN(showResult(42))).toBe(false);
	expect(showResult("あ")).toBe(null);	
	expect(showResult(256)).toBe(null);
});
