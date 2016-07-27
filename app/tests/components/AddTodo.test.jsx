var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('Todo');

describe('AddTodo', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });
  it('should call onAddTodo with valid data', ()=>{
    var todotext = 'checkmail'
    var spy = expect.createSpy();
    var AddTodo = TestUtils.renderIntoDocumen(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDom.findDOMNode(AddTodo));
//change value to check mail
    AddTodo.refs.todotext.value = todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCallWith(todotext);
  });
  it('should not call onAddTodo prop with invalid data', ()=>{
    var todotext = ''
    var spy = expect.createSpy();
    var AddTodo = TestUtils.renderIntoDocumen(<AddTodo onAddTodo={spy}/>);
    var $el = $(ReactDom.findDOMNode(AddTodo));
//change value to check mail
    AddTodo.refs.todotext.value = todotext;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCall(todotext);
  });
});
