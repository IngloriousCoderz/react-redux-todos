import root from './root';
import {addTodo} from '../actions';

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
});
