import initialState from './../../store/initialState.js';

const sessionSoundReducer = (state = initialState.sessionSound, action) => {
  if (action.type === 'sessionSoundAction') {
    return action.payload;
  }
  return state;
}

export default sessionSoundReducer;
