import SoundSettings from './../settings/soundSettings.jsx';
import { connect } from 'react-redux';

import isTickingAction from './../../actions/isTickingAction.js';
import clockTickSoundAction from './../../actions/clockTickSoundAction.js';
import hasThreeMinWarningAction from './../../actions/hasThreeMinWarningAction.js';
import threeMinWarningSoundAction from './../../actions/threeMinWarningSoundAction.js';
import sessionSoundAction from './../../actions/sessionSoundAction.js';
import breakSoundAction from './../../actions/breakSoundAction.js';

const mapStateToProps = (state) => {
  return {
    isTicking: state.isTicking,
    clockTickSound: state.clockTickSound,
    hasThreeMinWarning: state.hasThreeMinWarning,
    threeMinWarningSound: state.threeMinWarningSound,
    sessionSound: state.sessionSound,
    breakSound: state.breakSound,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsTicking: (value) => dispatch(isTickingAction(value)),
    setClockTickSound: (value) => dispatch(clockTickSoundAction(value)),
    setThreeMinWarning: (value) => dispatch(hasThreeMinWarningAction(value)),
    setThreeMinWarningSound: (value) => dispatch(threeMinWarningSoundAction(value)),
    setSessionSound: (value) => dispatch(sessionSoundAction(value)),
    setBreakSound: (value) => dispatch(breakSoundAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundSettings);
