var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = 'todo test';
    var TodoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });
  it('should toggle completed value when handleToggle called',()=>{
    var todoData={
    id:11,
    test: 'test features',
    completed: false
  };
  var TodoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  TodoApp.setState({todos: [todoData]});

  expect(TodoApp.state.todos[0].completed).toBe(false);
  todoApp.handleToggle(11);
  expect(TodoApp.state.todos[0].completed).toBe(true);
  });
});
