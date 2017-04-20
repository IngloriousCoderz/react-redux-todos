import React, {Component} from 'react';
import PropTypes from 'prop-types';

const styles = {
  input: {
    boxSizing: 'border-box',
    width: '75%',
  },
  button: {
    width: '25%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
};

class Form extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
  };

  handleChange = event => {
    const {setText} = this.props;
    setText(event.target.value);
  };

  handleClick = event => {
    const {text, addTodo} = this.props;
    event.preventDefault();
    addTodo(text);
  };

  render() {
    return (
      <form>
        <input
          value={this.props.text}
          onChange={this.handleChange}
          style={styles.input}
        />
        <button onClick={this.handleClick} style={styles.button}>
          Add todo
        </button>
      </form>
    );
  }
}

export default Form;
