import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.jsx';
import store from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('app'));