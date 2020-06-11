import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


//Need to actually update as time goes on, biggest issue.

export default class TodoList extends React.Component {
    // constructor(props){
    //     super(props);
        state = {
            todos: [],
        }
    // }


    addTodo = todo => {
        const newTodos = [todo, ...this.state.todos];
        //Figure out this.setState
        // this.setState(newTodos)
        this.state.todos=newTodos;
        console.log(this.state.todos);
        document.getElementById("root").append(this.render());
    }

    // toggleComplete = (id) => {
    //     this.setState({
    //         todos: this.state.todos.map(todo => {
    //             //update todo to completion=
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo,
    //                     complete: !todo.complete
    //                 }
    //             } else {
    //                 return todo;
    //             }
    //         })
    //     })
    // }

    // updateTodoToShow = (s) => {
    //     this.setState({
    //         todoToShow: s
    //     })
    // }

    render() {
        let todoList = [];
        todoList = this.state.todos;
        //issue not properly returning the "todos"
        return (
            <div id="majorityofcontent">
                <header>Things to do</header>
                <TodoForm onSubmit={this.addTodo}></TodoForm>
                {/* {todoList.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        id={todo.id}
                        text={todo} />
                ))} */}
                <div>
                    Todos left: 
                    <div id="todoList">
                        
                    </div>
                </div>
            </div>
        );
    }
}