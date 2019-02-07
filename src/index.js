import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from "react-router-dom";

import {createStore, applyMiddleware} from 'redux'
import reducer from './redux/reducer'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store ={store}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
