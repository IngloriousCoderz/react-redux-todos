import root from './root';
import {addTodo, removeTodo} from '../actions';

describe('todos', () => {
  it('should add a todo and void text', () => {
    const stateBefore = {
      text: 'world',
      todos: ['hello'],
    };
    const action = addTodo('world');
    const stateAfter = {
      text: '',
      todos: ['hello', 'world'],
    };

    expect(root(stateBefore, action)).toEqual(stateAfter);
  });

  it('should remove first todo without impacting on text', () => {
    const stateBefore = {
      text: 'world',
      todos: ['hello', 'world'],
    };
    const action = removeTodo();
    const stateAfter = {
      text: 'world',
      todos: ['world'],
    };

    expect(root(stateBefore, action)).toEqual(stateAfter);
  })
});
