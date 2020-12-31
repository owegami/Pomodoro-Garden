import initialState from './../../store/initialState.js';

const plantMaxImgNumReducer = (state = initialState.plantMaxImgNum, action) => {
  if (action.type === 'plantMaxImgNumAction') {
    return action.payload;
  }
  return state;
}

export default plantMaxImgNumReducer;
