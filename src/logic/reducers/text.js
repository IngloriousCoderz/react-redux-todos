import {SET_TEXT} from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case SET_TEXT:
      return action.text;
    default:
      return state;
  }
};
