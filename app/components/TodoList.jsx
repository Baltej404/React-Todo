var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    //render todo components
    //the key is used let react keep track of items
    //passed down the handleToggle method
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }
      return todos.map((todo)=>{
        return(
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };
    //created customer render that render a function
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
