import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';
import persistState from 'redux-localstorage';
import normalizrMiddleware from 'redux-normalizr-middleware';

let store = createStore(reducers, { changes: { item: [], isLoading: false } }, compose(
  applyMiddleware(promiseMiddleware(), normalizrMiddleware()),
  persistState(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
