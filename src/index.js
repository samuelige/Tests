import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/store';
import {
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.render(
  <Provider store = {store}>
     <Router>
       <React.StrictMode>
           <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);


