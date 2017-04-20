// @flow

import React, {Component} from 'react';

import Form from './StatefulForm';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: ['Todo 1', 'Todo 2', 'Todo 3'],
  };

  addTodo = (text: string) => {
    this.setState({
      todos: [...this.state.todos, text],
    });
  };

  render() {
    return (
      <div id="app">
        <Form addTodo={this.addTodo} />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
