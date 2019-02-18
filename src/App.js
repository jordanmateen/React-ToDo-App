import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'


class App extends Component {
  state  = {
    todo : []
  }

  deleteTodo = (id) =>{
    const todos = this.state.todo.filter( todo =>{
      return todo.id !== id
    });

    this.setState({
      todo : todos 
    })
  }
  addTodo = (todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todo, todo]

    this.setState({
      todo: todos
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todo} deleteTodo = {this.deleteTodo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
