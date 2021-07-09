import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Provider} from "react-redux"
import { BrowserRouter } from 'react-router-dom';
const myStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
<BrowserRouter>
  <Provider store={myStore}>
    <App />
  </Provider>
</BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals();
