import store from './../store/store.js';
import totalTimeTodayAction from './../actions/totalTimeTodayAction.js';
import dateAction from './../actions/dateAction.js';
import isOnAction from './../actions/isOnAction.js';

const initializeAppState = () => {
  if (store.getState().date !== (new Date().getMonth())+1 + '/' + (new Date().getDate())) {
    store.dispatch(totalTimeTodayAction(0));
    store.dispatch(dateAction((new Date().getMonth())+1 + '/' + (new Date().getDate())));
  }
  store.dispatch(isOnAction(false));
}

export default initializeAppState;