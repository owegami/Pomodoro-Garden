import { combineReducers } from 'redux';
import timeLogReducer from './timeLogReducer.js';

const rootReducer = combineReducers({
  timeLogState: timeLogReducer,
});

export default rootReducer;