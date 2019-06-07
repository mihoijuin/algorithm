import { CalcHash } from '../hash';

test('calc hash', () => {
	expect(CalcHash(10, 11)).toBe(10);
});

test('calc hash collision', () => {
	expect(CalcHash(10+1, 11)).toBe(0);
});
