import initialState from './../../store/initialState.js';

const selectHighContrastReducer = (state = initialState.selectHighContrast, action) => {
  if (action.type === 'selectHighContrastAction') {
    return action.payload;
  }
  return state;
}

export default selectHighContrastReducer;
