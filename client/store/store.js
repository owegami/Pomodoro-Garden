import initialState from './initialState.js';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../rootReducer.js';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => {
  console.log('Store has dispatched:', store.getState());
});

export default store;