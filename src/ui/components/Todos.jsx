import React from 'react';
import PropTypes from 'prop-types';

const ulStyle = {
  backgroundColor: 'cornflowerblue',
  listStyleType: 'none',
  padding: 10
};

const Todos = ({todos}) => (
  <ul style={ulStyle}>
    {todos.map(todo => <li key={todo}>{todo}</li>)}
  </ul>
);

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Todos;
