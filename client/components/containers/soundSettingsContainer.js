import SoundSettings from './../settings/soundSettings.jsx';
import { connect } from 'react-redux';

import isTickingAction from './../../actions/isTickingAction.js';
import clockTickSoundAction from './../../actions/clockTickSoundAction.js';
import hasThreeMinWarningAction from './../../actions/hasThreeMinWarningAction.js';

const mapStateToProps = (state) => {
  return {
    isTicking: state.isTicking,
    clockTickSound: state.clockTickSound,
    hasThreeMinWarning: state.hasThreeMinWarning,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIsTicking: (value) => dispatch(isTickingAction(value)),
    setClockTickSound: (value) => dispatch(clockTickSoundAction(value)),
    setThreeMinWarning: (value) => dispatch(hasThreeMinWarningAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundSettings);
