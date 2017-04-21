import todos from './todos';
import {addTodo, removeTodo} from '../actions';

describe('todos', () => {
  it('should add a todo', () => {
    const stateBefore = ['hello'];
    const action = addTodo('world');
    const stateAfter = ['hello', 'world'];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  it('should remove the first todo', () => {
    const stateBefore = ['hello', 'world'];
    const action = removeTodo();
    const stateAfter = ['world'];

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  })
});
