import React, { Component } from 'react';
import TodoList from './TodoList';
import '../stylesheets/app.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: "Hello, React!",
          desc: "Reactはじめました",
          done: false
        },
        {
          id: 2,
          title: "Hello, React!",
          desc: "Reduxtはじめました",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>todoアプリ作って見た</h1>
        <TodoList
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App
