import initialState from './../../store/initialState.js';

const dateReducer = (state = initialState.date, action) => {
  if (action.type === 'dateAction') {
    return action.payload;
  }
  return state;
}

export default dateReducer;
