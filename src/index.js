import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
       <Route path="*" component={App} />
       {/* <Route path="*" component={Four} /> */}
  </Router>,
	document.getElementById('root'));

serviceWorker.unregister();