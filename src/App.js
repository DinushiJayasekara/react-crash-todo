import React, { Component } from 'react';

import Header from './components/layouts/Header'
import Todos from './components/todos/Todos'

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

  // Toggle Complete
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  // Remove Item
  removeItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>

        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} removeItem={this.removeItem}></Todos>
      </div>
    );
  }
}

export default App;
