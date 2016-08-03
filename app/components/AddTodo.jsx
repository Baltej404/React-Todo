var React = require('react');

var AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    //get the value of the input
    var todoText = this.refs.todoText.value;
    //validation if data is entered
    if (todoText.length > 0) {
      //clear the value
      this.refs.todoText.value = '';
      //send value to onaddtodo function
      this.props.onAddTodo(todoText);
    } else {
      //move the cursor to input onClick
      this.refs.todotext.focus();
    }
  },
  render: function (){
    return(
      <div className="container__footer">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="todoText" placeholder="Add To Do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});
module.exports = AddTodo;
