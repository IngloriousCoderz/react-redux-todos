import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Todos from './Todos.jsx';

describe('Todos component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todos todos={['hello']} />, div);
    expect(div).not.toBe(null);
  });

  it('should match snapshot', () => {
    const tree = renderer.create(<Todos todos={['hello']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
