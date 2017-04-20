import {createStore} from 'redux';

import rootReducer from './reducers/root';
import {addTodo, removeTodo} from './actions';

const initialState = {value: '', todos: ['Todo 1', 'Todo 2', 'Todo 3']};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch(addTodo('Todo 4'));

store.dispatch(removeTodo());

export default store;
