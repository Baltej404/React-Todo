var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', ()=>{
  it('should exist', ()=>{
    expect(Todo).toExist();
  });
  it('should call onToggle prop with id onClick', ()=>{
    var todoData = {
      id: 199,
      text: 'write todo',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCallWith(199);
  });
});
