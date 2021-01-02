import initialState from './../../store/initialState.js';

const isSetReducer = (state = false, action) => {
  if (action.type === 'isSetAction') {
    return action.payload;
  }
  return state;
}

export default isSetReducer;
