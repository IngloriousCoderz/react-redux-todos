import text from './text';
import todos from './todos';
import {SET_TEXT, ADD_TODO, setText} from '../actions';

export const getText = state => state.text;
export const getTodos = state => state.todos;

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: text(state.text, action),
      };
    case ADD_TODO:
      return {
        ...state,
        text: text(state.text, setText('')),
        todos: todos(state.todos, action),
      };
    default:
      return state;
  }
};
