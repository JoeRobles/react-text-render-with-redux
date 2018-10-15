import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
