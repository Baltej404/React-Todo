var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      //have an empty string at start
      searchText: '',
      //opens up as not checked
      showCompleted: false,
      //return api
      todos: TodoApi.getTodos()
    };
  },
  //function called just after component updates
  componentDidUpdate: function(){
    //take api
    //just afte componenet update run function setTodos
    TodoApi.setTodos(this.state.todos);
  },
  //it will take the id it wants to switch
  handleToggle: function(id){
    var updatedTodos = this.state.todos.map(function (todo) {
      //check if the id of the todo is the same as the one we passed in
      if(todo.id === id) {
        //change the completed to the opposite of what it was
        todo.completed = !todo.completed;
      }
      //if id not match then it should return the oroper todo
      return todo;
    });
    //update state
    this.setState({
      //update the todos with the updatedTodos
      todos: updatedTodos
    });
  },
  handleAddTodo: function(text){
    this.setState({
      //new todos arrary to equal the old todos array
      todos: [
        //collect the todos
        ...this.state.todos,
        {
          //uuid generates unique ids
          id: uuid(),
          text: text,
          //boolean to show whether the task is completed or false
          //new todos should always be set to false as they are not completed
          completed: false
        }
      ]
    });
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
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchText);
//AddTodo contains props, gets the value and sends to the handle function
//pass handleToggle to todolist.
    return(
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  },
});
module.exports = TodoApp;
