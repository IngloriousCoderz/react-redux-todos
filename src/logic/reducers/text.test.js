import text from './text';
import {setText} from '../actions';

describe('text', () => {
  it('should set a new text', () => {
    const stateBefore = 'hello';
    const action = setText('world');
    const stateAfter = 'world';

    expect(text(stateBefore, action)).toBe(stateAfter);
  });
});
