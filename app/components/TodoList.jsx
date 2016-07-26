var React = require('react');
var Todo = require('Todo');
var TodoList = React.createClass({
  render: function(){
    var {todos} = this.props;
    //render todo components
    //the key is used let react keep track of items
    var renderTodos = () => {
      return todos.map((todo)=>{
        return(
          <Todo key={todo.id} {...todo}/>
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
