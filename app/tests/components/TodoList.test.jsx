var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  })
  it('should render one Todo comp for each item', () => {
    var todos = [{
      id: 1,
      text: 'something'
    }, {
      id: 2,
      text: 'two'
    }];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)
    expect(todosComponents.length).toBe(todos.length);
  });
});
