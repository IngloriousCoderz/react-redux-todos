export const SET_TEXT = 'SET_TEXT';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const setText = text => ({
  type: SET_TEXT,
  text,
});

export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const removeTodo = () => ({
  type: REMOVE_TODO,
  index: 0,
});
