import initialState from './../../store/initialState.js';

const willSaveSettingsReducer = (state = initialState.willSaveSettings, action) => {
  if (action.type === 'willSaveSettingsAction') {
    return action.payload;
  }
  return state;
}

export default willSaveSettingsReducer;
