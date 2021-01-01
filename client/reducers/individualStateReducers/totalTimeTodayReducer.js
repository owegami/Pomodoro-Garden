import initialState from './../../store/initialState.js';

const totalTimeTodayReducer = (state = initialState.totalTimeToday, action) => {
  if (action.type === 'totalTimeTodayAction') {
    return action.payload;
  }
  return state;
}

export default totalTimeTodayReducer;
