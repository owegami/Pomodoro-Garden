import { combineReducers } from 'redux';
import timerSettingsReducer from './timerSettingsReducer.js';
import timerStateReducer from './timerStateReducer.js';
import timeLogReducer from './timeLogReducer.js';
import soundSettingsReducer from './soundReducer.js';
import visualizerReducer from './visualizerReducer.js';
import dataReducer from './dataReducer.js';

const rootReducer = combineReducers({
  timerSettingsState: timerSettingsReducer,
  timerState: timerStateReducer,
  timeLogState: timeLogReducer,
  soundSettingsState: soundSettingsReducer,
  visualizerState: visualizerReducer,
  dataState: dataReducer
});

export default rootReducer;