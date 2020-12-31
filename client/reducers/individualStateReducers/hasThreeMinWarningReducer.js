import initialState from './../../store/initialState.js';

const hasThreeMinWarningReducer = (state = initialState.hasThreeMinWarning, action) => {
  if (action.type === 'hasThreeMinWarningAction') {
    return action.payload;
  }
  return state;
}

export default hasThreeMinWarningReducer;
