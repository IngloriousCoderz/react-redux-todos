import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Form from './components/Form';

class StatefulForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  state = {text: ''};

  setText = text => {
    this.setState({text});
  };

  addTodo = text => {
    const {addTodo} = this.props;
    addTodo(text);
    this.setText('');
  };

  render() {
    return (
      <Form
        text={this.state.text}
        setText={this.setText}
        addTodo={this.addTodo}
      />
    );
  }
}

export default StatefulForm;
