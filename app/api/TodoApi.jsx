var $ = require('jquery');

module.exports = {
  //takes an array of todas
  setTodos: function (todos) {
    if ($.isArray(todos)) {
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
    }catch (e){

    }

    //if the todos variable is a array
    if($.isArray(todos)) {
      //return the todos
      return todos;
    } else{
      //return an empty array
      return[];
    }
  },
  filterTodos:function (todos, showCompleted, searchText) {
    //get the array
    var filteredTodos = todos;
    //filter by showCompleted
    //filter is a build in method that will filter the array
    filteredTodos = filteredTodos.filter((todo)=> {
      //return items that have a completed item of false
      //if completed is false then it will return true and remian in the array
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo)=> {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText)> -1;

    });


    //sort todos with non-completed first
    //sort takes in a function
    //function takes two arguments
    filteredTodos.sort((a, b)=>{
      // a needs to have a completed status of false and b needs to have completed status of true
      if(a.completed === false && b.completed === true){
        //a shows before b
        return -1;
        //a is completed and b is not completed
      } else if (a.completed === true && b.completed === false) {
        //a should show after b
        return 1;
      }
      else{
        //a is equal to b so no change
        return 0;
      }
    });

    return filteredTodos;
  }
};
