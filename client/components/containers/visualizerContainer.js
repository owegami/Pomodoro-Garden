import Visualizer from './../visualizer.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    totalTimeEver: state.timeLogState.totalTimeEver,
    plantChoice: state.visualizerState.plantChoice,
    growthRate: state.visualizerState.growthRate,
    plantMaxImgNum: state.visualizerState.plantMaxImgNum,
    selectHighContrast: state.visualizerState.selectHighContrast
  }
}

export default connect(mapStateToProps)(Visualizer);