import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/text.reducer';

const allReducers = combineReducers({
  text: reducer
});
const state = {
  text: ''
};

const store = createStore(
  allReducers,
  state,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
