import initialState from './../../store/initialState.js';

const clockTickSoundReducer = (state = initialState.clockTickSound, action) => {
  if (action.type === 'clockTickSoundAction') {
    return action.payload;
  }
  return state;
}

export default clockTickSoundReducer;