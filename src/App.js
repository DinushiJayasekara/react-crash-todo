import Todos from './components/Todos'
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Attend meeting',
        completed: false
      },
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}></Todos>
      </div>
    );
  }
}

export default App;
