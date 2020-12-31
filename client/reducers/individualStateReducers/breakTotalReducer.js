import initialState from './../../store/initialState.js';

const breakTotalReducer = (state = initialState.breakTotal, action) => {
  if (action.type === 'breakTotalAction') {
    return action.payload;
  }
  return state;
}

export default breakTotalReducer;