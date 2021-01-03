import initialState from './../../store/initialState.js';

const breakSoundReducer = (state = initialState.breakSound, action) => {
  if (action.type === 'breakSoundAction') {
    return action.payload;
  }
  return state;
}

export default breakSoundReducer;
