import { calcHash, createHashTable } from '../hash';

test('calc hash', () => {
	expect(calcHash(10, 11)).toBe(10);
});

test('calc hash collision', () => {
	expect(calcHash(10+1, 11)).toBe(0);
});

test('hash table', () => {
	expect(createHashTable()[0]).toBe(42);
});
