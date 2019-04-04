import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import NotFound from './components/not-found';

class NoMatch extends Component {

  /* 
    done: This is the 404 route
  */

  render() {
    return (
        <div className="body">
          <div className="container">
            <p>Nothing to see here!</p>
            <p>404: Route not found.</p>
            <sub>try localhost:300/search</sub>
          </div>
        </div>
    );
  }
}

export default NoMatch;