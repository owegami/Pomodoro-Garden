import { createStore, applyMiddleware } from 'redux';
import rootReducer from './../reducers/rootReducer.js';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => {
  console.log('Store has dispatched:', store.getState());
});

export default store;