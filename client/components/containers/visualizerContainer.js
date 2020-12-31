import Visualizer from './../visualizer.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    totalTimeEver: state.totalTimeEver,
    plantChoice: state.plantChoice,
    growthRate: state.growthRate,
    plantMaxImgNum: state.plantMaxImgNum,
    selectHighContrast: state.selectHighContrast
  }
}

export default connect(mapStateToProps)(Visualizer);