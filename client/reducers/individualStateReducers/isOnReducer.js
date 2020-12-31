import initialState from './../../store/initialState.js';

const isOnReducer = (state = initialState.isOn, action) => {
  if (action.type === 'isOnAction') {
    return action.payload;
  }
  return state;
}

export default isOnReducer;
