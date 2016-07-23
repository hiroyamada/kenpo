import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import promiseMiddleware from 'redux-promise-middleware';

let store = createStore(reducers, { changes: { item: [], isLoading: false } }, compose(
  applyMiddleware(promiseMiddleware())
));

// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
