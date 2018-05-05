import React, {Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor() {
    super()
    this.state={
      count: 0,
      value: "",
    }
  }

  plus() {
    this.setState({count: this.state.count + 1})
  }

  onChange(e) {
    this.setState({value: e.target.text})
  }

  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        {...todo}
      />
    )

    return(
      <div>
        <div>
          <h2>カウンター</h2>
          <p>{this.state.count}</p>
          <button onClick={this.plus.bind(this)}>+</button>
          <h2>インプット</h2>
          <input
            type="text"
            value={this.state.value}
            onChange={this.onChange.bind(this)}
          />
          <p>{this.state.text}</p>
        </div>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}

export default TodoList
