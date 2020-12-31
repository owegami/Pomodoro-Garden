import initialState from './../../store/initialState.js';

const isSetReducer = (state = initialState.isSet, action) => {
  if (action.type === 'isSetAction') {
    return action.payload;
  }
  return state;
}

export default isSetReducer;
