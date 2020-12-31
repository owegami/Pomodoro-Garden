import initialState from './../../store/initialState.js';

const userReducer = (state = initialState.user, action) => {
  if (action.type === 'userAction') {
    return action.payload;
  }
  return state;
}

export default userReducer;
