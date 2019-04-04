import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import NoMatch from './NoMatch';
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
  	<Switch>
       <Route path="/search" component={App} />

       {/* todo: 404 route */}

       <Route component={NoMatch} />
    </Switch>
  </Router>,
	document.getElementById('root'));

serviceWorker.unregister();