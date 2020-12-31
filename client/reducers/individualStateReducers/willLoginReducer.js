import initialState from './../../store/initialState.js';

const willLoginReducer = (state = initialState.willLogin, action) => {
  if (action.type === 'willLoginAction') {
    return action.payload;
  }
  return state;
}

export default willLoginReducer;
