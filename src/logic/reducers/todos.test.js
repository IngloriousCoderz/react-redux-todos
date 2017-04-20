import todos from './todos';
import {addTodo} from '../actions';

describe('todos', () => {
  it('should add a todo', () => {
    const stateBefore = ['hello'];
    const action = addTodo('world');
    const stateAfter = ['hello', 'world'];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
