import initialState from './../../store/initialState.js';

const directionReducer = (state = initialState.direction, action) => {
  if (action.type === 'directionAction') {
    return action.payload;
  }
  return state;
}

export default directionReducer;
