var React = require('react');
var ReactDOM =require('react-dom');

var AddTodo = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    //get the value of the input
    var todotext = this.refs.todotext.value;
    //validation if data is entered
    if (todotext.length > 0) {
      //clear the value
      this.refs.todotext.value = '';
      //send value to onaddtodo function
      this.props.onAddTodo(todotext);
    } else {
      //move the cursor to input onClick
      this.refs.todotext.focus();
    }
  },
  render: function (){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todotext" placeholder="Add To Do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});
module.exports = AddTodo;
