import GraphicsSettings from './../settings/graphicsSettings.jsx';
import { connect } from 'react-redux';

import selectHighContrastAction from './../../actions/selectHighContrastAction.js';

const mapStateToProps = (state) => {
  return {
    selectHighContrast: state.selectHighContrast,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectHighContrast: (value) => dispatch(selectHighContrastAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphicsSettings);