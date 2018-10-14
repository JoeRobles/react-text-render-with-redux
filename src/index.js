import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TEXT':
        return action.payload.newState;
      default:
        return 'State';
    }
  console.log(action);
};

const store = createStore(reducer);

console.log(store.getState());

const action = {
  type: 'UPDATE_TEXT',
    payload: {
      newState: 'New state'
    }
};

store.dispatch(action);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
