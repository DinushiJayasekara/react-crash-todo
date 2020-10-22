import React, { Component } from 'react';

import Header from './components/layouts/Header'
import AddTodo from './components/todos/AddTodo'
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

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div className="App">

        <div className="container">
          {/* Add Header */}
          <Header></Header>

          {/* Insert Todo Item */}
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <br></br>

          <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} removeItem={this.removeItem}></Todos>
        </div>

      </div>
    );
  }
}


export default App;
