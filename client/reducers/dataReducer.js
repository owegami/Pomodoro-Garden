import initialState from './../store/initialState.js';

const dataReducer = (state = initialState.dataPersistingState, action) => {
  if (action.type === 'Save data settings') {
    return action.payload;
  }
  return state;
}

export default dataReducer;