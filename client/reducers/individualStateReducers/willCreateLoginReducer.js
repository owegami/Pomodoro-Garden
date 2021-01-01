import initialState from './../../store/initialState.js';

const willCreateLoginReducer = (state = false, action) => {
  if (action.type === 'willCreateLoginAction') {
    return action.payload;
  }
  return state;
}

export default willCreateLoginReducer;
