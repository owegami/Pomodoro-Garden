import TimerVisual from './../timer.jsx';
import { connect } from 'react-redux';

import isOnAction from './../../actions/isOnAction.js';
import isResetAction from './../../actions/isResetAction.js';
import isSetAction from './../../actions/isSetAction.js';
import willLogTimeAction from './../../actions/willLogTimeAction.js';
import totalTimeTodayAction from './../../actions/totalTimeTodayAction.js';
import totalTimeEverAction from './../../actions/totalTimeEverAction.js';
import errorPresentAction from './../../actions/errorPresentAction.js';

const mapStateToProps = (state) => {
  return {
    sessionTotal: state.sessionTotal,
    direction: state.direction,
    breakTotal: state.breakTotal,
    pomodoros: state.pomodoros,
    isOn: state.isOn,
    isReset: state.isReset,
    isSet: state.isSet,
    totalTimeToday: state.totalTimeToday,
    totalTimeEver: state.totalTimeEver,
    isTicking: state.isTicking,
    clockTickSound: state.clockTickSound,
    hasThreeMinWarning: state.hasThreeMinWarning,
    user: state.user,
    password: state.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTimerOn: (toggle) => dispatch(isOnAction(toggle)),
    resetTimer: (toggle) => dispatch(isResetAction(toggle)),
    setNewSettings: (toggle) => dispatch(isSetAction(toggle)),
    logTime: (toggle) => dispatch(willLogTimeAction(toggle)),
    addToTotalTimeToday: (newTotal) => dispatch(totalTimeTodayAction(newTotal)),
    addToTotalTimeEver: (newTotal) => dispatch(totalTimeEverAction(newTotal)),
    errorThrown: (toggle) => dispatch(errorPresentAction(toggle)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerVisual);