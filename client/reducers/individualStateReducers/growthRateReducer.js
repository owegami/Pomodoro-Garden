import initialState from './../../store/initialState.js';

const growthRateReducer = (state = initialState.growthRate, action) => {
  if (action.type === 'growthRateAction') {
    return action.payload;
  }
  return state;
}

export default growthRateReducer;
