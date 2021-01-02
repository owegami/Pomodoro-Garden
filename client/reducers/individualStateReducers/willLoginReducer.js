import initialState from './../../store/initialState.js';

const willLoginReducer = (state = false, action) => {
  if (action.type === 'willLoginAction') {
    return action.payload;
  }
  return state;
}

export default willLoginReducer;
