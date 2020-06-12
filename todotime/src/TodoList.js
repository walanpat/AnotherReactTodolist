import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

//Need to actually update as time goes on, biggest issue.

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    console.log(todo);
    const newTodos = [todo, ...this.state.todos];
    //Figure out this.setState
    // this.setState(newTodos)
    this.setState({ todos: newTodos });
    // console.log(this.state.todos);
  };

  render() {
    //issue not properly returning the "todos"
    return (
      <div id='majorityofcontent'>
        <header>Things to do</header>
        <TodoForm onSubmit={this.addTodo}></TodoForm>
        <div>
          Todos left:
          <div id='todoList'>
            {this.state.todos.map((todo) => (
              <Todo
                key={todo.id}
                toggleComplete={() => this.toggleComplete(todo.id)}
                id={todo.id}
                text={todo.text}
                complete={todo.complete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
