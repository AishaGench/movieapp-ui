import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
