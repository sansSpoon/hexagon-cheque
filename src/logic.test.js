import React from 'react';
import ReactDOM from 'react-dom';
import { fTen, tJoin, sumTho, period, cents, cleanAmount } from './logic';

test('adds 100 + 10 + 1 to equal 111', () => {
  expect(sumTho(100, 10, 1)).toBe(111);
});