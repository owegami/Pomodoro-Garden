import initialState from './../../store/initialState.js';

const loggedInReducer = (state = initialState.loggedIn, action) => {
  if (action.type === 'loggedInAction') {
    return action.payload;
  }
  return state;
}

export default loggedInReducer;
