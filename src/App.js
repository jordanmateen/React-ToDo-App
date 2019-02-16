import React, { Component } from 'react';
import Todos from './Todos'


class App extends Component {
  state  = {
    todo : [
      {id:1 , content: 'Study React'},
      {id:2 , content: 'build cool stuff'}
    ]
  }

  deleteTodo = (id) =>{
    const todos = this.state.todo.filter( todo =>{
      return todo.id !== id
    });

    this.setState({
      todo : todos 
    })
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos = {this.state.todo} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
