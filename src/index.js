import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { combineReducers, createStore } from 'redux';

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return action.payload.newText;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  text:reducer
});

const store = createStore(allReducers);

console.log(store.getState());

const action = {
  type: 'UPDATE_TEXT',
    payload: {
      newText: 'New state'
    }
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
