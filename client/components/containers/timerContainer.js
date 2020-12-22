import TimerVisual from './../timer.jsx';
import { connect } from 'react-redux';
import logTimeAction from './../../actions/logTime.js';
import saveDataSettingsAction from './../../actions/saveDataSettings.js';
import saveTimerStateAction from './../../actions/saveTimerState.js';
import setTimerOnAction from './../../actions/individualStateChanges/setTimerOnAction.js'

const mapStateToProps = (state) => {
  return {
    sessionTotal: state.timerSettingsState.sessionTotal,
    direction: state.timerSettingsState.direction,
    breakTotal: state.timerSettingsState.breakTotal,
    pomodoros: state.timerSettingsState.pomodoros,
    isOn: state.timerState.isOn,
    isReset: state.timerState.isReset,
    isSet: state.timerState.isSet,
    totalTime: state.timeLogState.totalTime,
    isTicking: state.soundSettingsState.isTicking,
    clockTickSound: state.soundSettingsState.clockTickSound,
    hasThreeMinWarning: state.soundSettingsState.hasThreeMinWarning,
    user: state.dataPersistingState.user,
    password: state.dataPersistingState.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTimerOn: (toggle) => dispatch(saveTimerStateAction({isOn: toggle, isReset: false, isSet: false})),
    resetTimer: (toggle) => dispatch(saveTimerStateAction({isOn: false, isReset: toggle, isSet: false})),
    setNewSettings: (toggle) => dispatch(saveTimerStateAction({isOn: false, isReset: toggle, isSet: false})),
    logTime: (toggle) => dispatch(logTimeAction),
    addToTotalTime: (newTotal) => dispatch(logTimeAction(newTotal)),
    errorThrown: (toggle) => dispatch(saveDataSettingsAction({errorPresent: toggle, haveServerMessage: false, loggedIn: false, password: "", saveToDatabase: false, serverResponseMessage: undefined, user: "", willCreateLogin: false, willLogTime: false, willLogin: true, willSaveSettings: false})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerVisual);