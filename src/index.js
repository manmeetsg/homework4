import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('main'));
