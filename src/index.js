import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

import './index.css';

import App from './app/App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
