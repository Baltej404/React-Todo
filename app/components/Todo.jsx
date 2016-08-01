var React = require('react');

var Todo = React.createClass({
  render: function () {
    //grab the props
    var {id, text, completed} = this.props;
    //render the props
    //collect the completed property
    //completed prop checks whether the checkbox should be true or false
    //function to carry the id onto parent, id to toggle
    return (
      <div onClick={()=>{
          this.props.onToggle(id);
        }}>
        <input type="checkbox" checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
