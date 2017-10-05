import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import reducers from './reducer';
import App from './component/app';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
, document.getElementById('root'));
