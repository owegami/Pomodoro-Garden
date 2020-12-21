import initialState from './../store/initialState.js';

const visualizerReducer = (state = initialState.visualizerState, action) => {
  if (action.type === 'Plant Changes') {
    return action.payload;
  }
  return state;
}

export default visualizerReducer;