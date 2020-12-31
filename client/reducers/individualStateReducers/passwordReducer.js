import initialState from './../../store/initialState.js';

const passwordReducer = (state = initialState.password, action) => {
  if (action.type === 'passwordAction') {
    return action.payload;
  }
  return state;
}

export default passwordReducer;
