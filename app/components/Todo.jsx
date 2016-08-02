var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function () {
    //grab the props
    var {id, text, completed, createdAt, completedAt} = this.props;

    var renderDate = ()=>{
      var message = 'Created: ';
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
    return (
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
