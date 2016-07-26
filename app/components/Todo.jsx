var React = require('react');
var TodoApp= require('TodoApp');
var Todo = React.createClass({
  render: function () {
    //grab the props
    var {id, text} = this.props;
    //render the props
    return (
      <div>
        {id}.  {text}
      </div>
    );
  }
});

module.exports = Todo;
