var $ = require('jquery');
module.exports = {
  //takes an array of todas
  setTodos: function (todos) {
    if($.isArray(todos)) {
      //created a todos string 'todos'
      //converts object or arrays into strings
      //localStorage only takes in strings
      localStorage.setItem('todos', JSON.stringify(todos));

      return todos;
    }
  },
  getTodos: function () {
    //grab the items of localStorage
    //get the string items of localStorage, enter the localStorage string name 'todos'
    var stringTodos = localStorage.getItem('todos');
    //if there is no validate data then return the array
    var todos = [];
    //try to convert string into arrays
    try {
      todos = JSON.parse(stringTodos);
    }catch (e) {
    }

    //if the todos variable is a array
    if($.isArray(todos)) {
      //return the todos
      return todos;
    } else{
      //return an empty array
      return[];
    }
  }
};
