import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';
import '../styles/index.css';

class NoMatch extends Component {

  /* 
    This is the 404 route to display when the user navigates to a url slug without a valid route.
  */

  render() {
    return (
        <div className="body">
          <div className="container">
            <p>Nothing to see here!</p>
            <p>404: Route not found.</p>
            <Link to='search'>go to search route</Link>
          </div>
        </div>
    );
  }
}

export default NoMatch;