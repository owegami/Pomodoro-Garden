import initialState from './../../store/initialState.js';

const plantChoiceReducer = (state = initialState.plantChoice, action) => {
  if (action.type === 'plantChoiceAction') {
    return action.payload;
  }
  return state;
}

export default plantChoiceReducer;
