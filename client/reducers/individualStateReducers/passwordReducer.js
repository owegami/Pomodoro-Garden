import initialState from './../../store/initialState.js';

const passwordReducer = (state = null, action) => {
  if (action.type === 'passwordAction') {
    return action.payload;
  }
  return state;
}

export default passwordReducer;
