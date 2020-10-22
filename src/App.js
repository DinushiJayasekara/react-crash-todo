import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Header from './components/layouts/Header';
import About from './components/pages/About';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Make dinner',
        completed: true
      },
      {
        id: uuid(),
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
      id: uuid(),
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">

          <div className="container">
            {/* Add Header */}
            <Header></Header>

            {/* Create Route */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                {/* Insert Todo Item */}
                <AddTodo addTodo={this.addTodo}></AddTodo>
                <br></br>

                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} removeItem={this.removeItem}></Todos>
              </React.Fragment>
            )}></Route>

            <Route path="/about" component={About}></Route>

          </div>

        </div>
      </Router >
    );
  }
}


export default App;
