import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducers/text.reducer';
import { action } from './actions/text.action';

const allReducers = combineReducers({
  text: reducer
});

const store = createStore(
  allReducers,
  {
    text: ''
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());


store.dispatch(action);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
