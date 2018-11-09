import React from 'react';
import ReactDOM from 'react-dom';
import { fTen, tJoin, sumTho, period, cents, cleanAmount } from './logic';

test('adds 100 + 10 + 1 to equal 111', () => {
	expect(sumTho(100, 10, 1)).toBe(111);
});

test('returns " and " when param1 is greater than 0 and param2 equals 0', () => {
	expect(tJoin(1, 0)).toBe(' and ');
});

test('returns "two" when param1 is 0 and param2 is 2', () => {
	expect(fTen(0, 2)).toBe('two');
});

test('returns "fifteen" when param1 is 1 and param2 is 5', () => {
	expect(fTen(1, 5)).toBe('fifteen');
});

test('returns "sixty" when param1 is 6 and param2 is 0', () => {
	expect(fTen(6, 0)).toBe('sixty');
});

test('returns " and one cent" when sum of parameters equal 1', () => {
	expect(cents(0, 1)).toBe(' and one cent');
});

test('returns " only" when sum of parameters equal 0', () => {
	expect(cents(0, 0)).toBe(' only');
});

test('returns " and XX cents" when sum of parameters greater than 0', () => {
	expect(cents(5, 4)).toBe(' and fifty four cents');
});
