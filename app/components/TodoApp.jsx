var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      //have an empty string at start
      searchText: '',
      //opens up as not checked
      showCompleted: false,
      //create array of items for list
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Go To Work'
        },
        {
          id: 4,
          text: 'Buy Food'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    alert('new todo ' + text);
    },
    //set the state
    handleSearch:function(showCompleted, searchText){
      this.setState({
        //show completed state is equal to the showCompleted value
        showCompleted: showCompleted,
        //searchText state is equal to the searchText value
        searchText: searchText.toLowerCase()
      });

    },
  render: function(){
    var {todos} = this.state;
//AddTodo contains props, gets the value and sends to the handle function
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  },
});
module.exports = TodoApp;
