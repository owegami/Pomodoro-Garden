import initialState from './../store/initialState.js';

const soundSettingsReducer = (state = initialState.soundSettingsState, action) => {
  if (action.type === 'Save sound settings') {
    return action.payload;
  }
  return state;
}

export default soundSettingsReducer;