var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    //collect the values
    var searchText = this.refs.searchText.value;
//collect the value of checkbox
    var showCompleted = this.ref.showCompleted.checked;
//carry the values onto the props onSearch
//this will be passed onto the TodoApp
    this.props.onSearch(showCompleted, searchText);
  },
  //onchange method checks for changes everytime, if something changed then this method runs
  render: function(){
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Seach To do" onChange={this.handleSearch}></input>
        </div>
        <label>
          <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}></input>
          Show completed
        </label>
      <div></div>
      </div>
    )
  }
});

module.exports = TodoSearch;
