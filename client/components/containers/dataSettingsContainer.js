import [FILL_ME_IN] from './../settings/[FILL_ME_IN].jsx';
import { connect } from 'react-redux';

import [FILL_ME_IN] from './../../actions/[FILL_ME_IN].js';

const mapStateToProps = (state) => {
  return {
    [FILL_ME_IN]: state.[FILL_ME_IN],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    [FILL_ME_IN]: (value) => dispatch([FILL_ME_IN]Action(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)([FILL_ME_IN]);