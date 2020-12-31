import TimerSettings from './../settings/timerSettings.jsx';
import { connect } from 'react-redux';

import sessionTotalAction from './../../actions/sessionTotalAction.js';
import directionAction from './../../actions/directionAction.js';
import breakTotalAction from './../../actions/breakTotalAction.js';
import pomodorosAction from './../../actions/pomodorosAction.js';
import isSetAction from './../../actions/isSetAction.js';
import saveToDatabaseAction from './../../actions/saveToDatabaseAction.js';

const mapStateToProps = (state) => {
  return {
    sessionTotal: state.sessionTotal,
    direction: state.direction,
    breakTotal: state.breakTotal,
    pomodoros: state.pomodoros,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSession: (value) => dispatch(sessionTotalAction(value)),
    setDirection: (value) => dispatch(directionAction(value)),
    setBreaks: (value) => dispatch(breakTotalAction(value)),
    setNumberOfSessions: (value) => dispatch(pomodorosAction(value)),
    setNewSettings: (value) => dispatch(isSetAction(value)),
    setToSaveSettings: (value) => dispatch(saveToDatabaseAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerSettings);