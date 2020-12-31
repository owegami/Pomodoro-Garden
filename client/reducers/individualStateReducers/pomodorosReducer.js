import initialState from './../../store/initialState.js';

const pomodorosReducer = (state = initialState.pomodoros, action) => {
  if (action.type === 'pomodorosAction') {
    return action.payload;
  }
  return state;
}

export default pomodorosReducer;
