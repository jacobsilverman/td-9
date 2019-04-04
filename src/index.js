import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import NoMatch from './NoMatch';
import * as serviceWorker from './serviceWorker';

/* 
	✅ Install React Router and set up your <Route> and <Link> or <NavLink> components. - done.

	✅ Include a "Search" link that includes a search field to let users search for photos. - done - my app automatically searches as you type, which is better suited to react since react does not require page re-load to render new components.

	✅ Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.


*/

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