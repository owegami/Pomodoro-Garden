import { combineReducers } from 'redux';

import breakSoundReducer from './individualStateReducers/breakSoundReducer.js';
import breakTotalReducer from './individualStateReducers/breakTotalReducer.js';
import clockTickSoundReducer from './individualStateReducers/clockTickSoundReducer.js';
import dateReducer from './individualStateReducers/dateReducer.js';
import directionReducer from './individualStateReducers/directionReducer.js';
import errorPresentReducer from './individualStateReducers/errorPresentReducer.js';
import growthRateReducer from './individualStateReducers/growthRateReducer.js';
import hasThreeMinWarningReducer from './individualStateReducers/hasThreeMinWarningReducer.js';
import haveServerMessageReducer from './individualStateReducers/haveServerMessageReducer.js';
import isOnReducer from './individualStateReducers/isOnReducer.js';
import isResetReducer from './individualStateReducers/isResetReducer.js';
import isSetReducer from './individualStateReducers/isSetReducer.js';
import isTickingReducer from './individualStateReducers/isTickingReducer.js';
import loggedInReducer from './individualStateReducers/loggedInReducer.js';
import passwordReducer from './individualStateReducers/passwordReducer.js';
import plantChoiceReducer from './individualStateReducers/plantChoiceReducer.js';
import plantMaxImgNumReducer from './individualStateReducers/plantMaxImgNumReducer.js';
import pomodorosReducer from './individualStateReducers/pomodorosReducer.js';
import saveToDatabaseReducer from './individualStateReducers/saveToDatabaseReducer.js';
import selectHighContrastReducer from './individualStateReducers/selectHighContrastReducer.js';
import serverResponseMessageReducer from './individualStateReducers/serverResponseMessageReducer.js';
import sessionSoundReducer from './individualStateReducers/sessionSoundReducer.js';
import sessionTotalReducer from './individualStateReducers/sessionTotalReducer.js';
import threeMinWarningSoundReducer from './individualStateReducers/threeMinWarningSoundReducer.js';
import totalTimeTodayReducer from './individualStateReducers/totalTimeTodayReducer.js';
import totalTimeEverReducer from './individualStateReducers/totalTimeEverReducer.js';
import userReducer from './individualStateReducers/userReducer.js';
import willCreateLoginReducer from './individualStateReducers/willCreateLoginReducer.js';
import willLoginReducer from './individualStateReducers/willLoginReducer.js';
import willLogTimeReducer from './individualStateReducers/willLogTimeReducer.js';

const rootReducer = combineReducers({
  breakSound: breakSoundReducer,
  breakTotal: breakTotalReducer,
  clockTickSound: clockTickSoundReducer,
  date: dateReducer,
  direction: directionReducer,
  errorPresent: errorPresentReducer,
  growthRate: growthRateReducer,
  hasThreeMinWarning: hasThreeMinWarningReducer,
  haveServerMessage: haveServerMessageReducer,
  isOn: isOnReducer,
  isReset: isResetReducer,
  isSet: isSetReducer,
  isTicking: isTickingReducer,
  loggedIn: loggedInReducer,
  password: passwordReducer,
  plantChoice: plantChoiceReducer,
  plantMaxImgNum: plantMaxImgNumReducer,
  pomodoros: pomodorosReducer,
  saveToDatabase: saveToDatabaseReducer,
  selectHighContrast: selectHighContrastReducer,
  serverResponseMessage: serverResponseMessageReducer,
  sessionSound: sessionSoundReducer,
  sessionTotal: sessionTotalReducer,
  threeMinWarningSound: threeMinWarningSoundReducer,
  totalTimeToday: totalTimeTodayReducer,
  totalTimeEver: totalTimeEverReducer,
  user: userReducer,
  willCreateLogin: willCreateLoginReducer,
  willLogin: willLoginReducer,
  willLogTime: willLogTimeReducer,
});

export default rootReducer;