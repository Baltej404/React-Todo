var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    //grab the props
    var {id, text, completed, createdAt, completedAt} = this.props;
    //if completed then show class todo completed if not true then keep the todo class
    var todoClassName = completed ? 'todo todo-completed': 'todo';
    var renderDate = ()=>{
      var message = 'Created: ';
      // if item is not completed then timestamp is createdAt
      var timestamp = createdAt;

      if(completed){
        message = 'completed: ';
        //if item is completed then load the completedAt in timestamp instead of createdAt
        timestamp = completedAt;
      }

      //return timestamp with moment
      return message + moment.unix(timestamp).format('Do MM YYYY @ h:mm a');
    };
    //render the props
    //collect the completed property
    //completed prop checks whether the checkbox should be true or false
    //function to carry the id onto parent, id to toggle
    //todoClassName checks if completed or not and shows differents classes
    return (
      <div className={todoClassName} onClick={()=>{
          this.props.onToggle(id);
        }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
