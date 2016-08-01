var expect = require('expect');
var TodoApi = require('TodoApi');

describe('TodoApi', ()=>{
  //function runs before any test
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist', ()=>{
    expect(TodoApi).toExist();
  });
  describe('setTodos', ()=>{
    it('should set valid todos array', ()=>{
      var todos =[{
        id:12,
        test: 'test',
        completed: false
      }];
      TodoApi.setTodos(todos);

      var actualTodos = JSN.parse(localStorage.getItem('todos'));
      //compares values
      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos arrays', ()=>{
      var badTodos = {a: 'b'};

      TodoApi.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe('null');
    });
  });
  describe('getTodos', ()=>{
    it('should return empty array for bad localStorage data', ()=>{
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todos if valid array in localStorage', ()=>{
      var todos =[{
        id:12,
        test: 'test',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    });
  });
describe('filterTodo', ()=>{
  var todos = [{
    id:1,
    text: 'eat',
    completed: true
  },{
    id:2,
    text: 'sleep',
    completed: false
  },{
    id:3,
    text: 'some text here',
    completed: true;
  }];
  it('should return all items if showcompleted is true',()=>{
    var filteredTodos = TodoApi.filterTodo(todos, true, '');

    expect(filteredTodos.length).toBe(3);

  });
  it('should return non completed todos when showcompleted is false ',()=>{
    var filteredTodos = TodoApi.filterTodo(todos, false, '');

    expect(filteredTodos.length).toBe(1);
  });
  it('should sort by completed status', ()=>{
    var filteredTodos = TodoApi.filterTodo(todos, true, '');
//expect the first item in array to have completed status of false
    expect(filteredTodos[0].completed).toBe(false);
  });
  it('should filter todos by searchText',()=>{
    var filteredTodos = TodoApi.filterTodo(todos, true, 'some');

    expect(filteredTodos.length).toBe(1);

  });
  it('should return all todos if searchText is empty',()=>{
      var filteredTodos = TodoApi.filterTodo(todos, true, '');

      expect(filteredTodos.length).toBe(3);

    });
});

});
