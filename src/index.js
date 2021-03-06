import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router'
import Routes from './routes'
import ReduxPromise from 'redux-promise'

import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(Reducers)}>
    <Router history={browserHistory} routes={Routes}/>
  </Provider>
  , document.querySelector('.container'));
