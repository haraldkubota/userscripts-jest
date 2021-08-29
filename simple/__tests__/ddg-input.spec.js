/**
 * @jest-environment jsdom
 */

test('Check input field background changed', () => {

  document.body.innerHTML = `
    <input id="search_form_input_homepage" />
    <button id="addTodoBtn">Add todo</button>
    <ol id="todoList"></ol>
  `;
  require('../src/ddg.user.js');

  const inputField = document.getElementById('search_form_input_homepage');

  expect(inputField.style.backgroundColor).toBe('rgb(32, 32, 32)');
});
