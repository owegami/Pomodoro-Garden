import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState.js';
import rootReducer from './../reducers/rootReducer.js';
import thunk from 'redux-thunk';

import { setToLocalStorage } from './../controllers/setToLocalStorage.js';

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  );

const unsubscribe = store.subscribe(() => {
  let state = store.getState();
  setToLocalStorage(state)
  console.log('Store has dispatched and stored to local storage:', state);
});

export default store;