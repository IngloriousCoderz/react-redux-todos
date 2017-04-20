import React from 'react';
import {Provider} from 'react-redux';

import store from '../logic/store';
import Form from './FormContainer';
import Todos from './TodosContainer';

const App = () => (
  <Provider store={store}>
    <div id="app">
      <Form />
      <Todos />
    </div>
  </Provider>
);

export default App;
