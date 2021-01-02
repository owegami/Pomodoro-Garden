import initialState from './../../store/initialState.js';

const loggedInReducer = (state = false, action) => {
  if (action.type === 'loggedInAction') {
    return action.payload;
  }
  return state;
}

export default loggedInReducer;
