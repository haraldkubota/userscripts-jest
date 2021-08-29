/**
 * @jest-environment jsdom
 */

import { addOneFactory } from '../src/logic.mjs';

let numberField;

beforeEach(() => {
  document.body.innerHTML = `
    <div id="theNumber"></div>
  `;
  numberField = document.getElementById('theNumber');

})

test('Check addOne works once', () => {

  const addOne = addOneFactory(10, 'theNumber');
  addOne();
  expect(numberField.innerHTML).toBe('11');
});

test('Check addOne works twice', () => {

  const addOne = addOneFactory(10, 'theNumber');
  addOne();
  addOne();
  expect(numberField.innerHTML).toBe('12');
});