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

test('returns "five" when parameters are 0,0,5', () => {
	expect(period(0, 0, 5)).toBe('five');
});

test('returns "fifteen" when parameters are 0,1,5', () => {
	expect(period(0, 1, 5)).toBe('fifteen');
});

test('returns "fifty" when parameters are 0,5,0', () => {
	expect(period(0, 5, 0)).toBe('fifty');
});

test('returns "one hundred and fifty" when parameters are 1,5,0', () => {
	expect(period(1, 5, 0)).toBe('one hundred and fifty');
});

test('removes commas from input', () => {
	expect(cleanAmount('1,012,234.12')).toBe('1012234.12');
});

test('rounds to two decimal places', () => {
	expect(cleanAmount('1,012,234.1256')).toBe('1012234.13');
});

test('Removes dollar symbols and trims whitespace', () => {
	expect(cleanAmount(' $1,012,234.1256  ')).toBe('1012234.13');
});