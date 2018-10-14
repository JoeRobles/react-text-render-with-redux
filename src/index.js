import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

const reducer = () => {
  return 'State';
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

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
