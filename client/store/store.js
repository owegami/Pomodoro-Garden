import { createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState.js';
import rootReducer from './../reducers/rootReducer.js';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  );

const unsubscribe = store.subscribe(() => {
  console.log('Store has dispatched:', store.getState());
});

export default store;