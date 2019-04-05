import React, { Fragment } from 'react';
/* Import Custom Components */
import GalleryContainer from '../components/GalleryContainer';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import MainNav from '../components/MainNav';

import '../styles/App.css';
import '../styles/index.css';

/* 
  A Header component containing nav bar only. I made the design decision to remove the search bar from NavItem Routes since they are only for one search term. I thought that is logical. 
*/

const Header = (props) => (
  <Fragment>
    <MainNav {...props}/>
  </Fragment>
)

export default (props) => (
	<div className="body">
	    <div className="container">
	      <Header {...props}/>
	      <div className="photo-container">
	        { (props.props.query === '') ? 
	          <h2>Results</h2> :
	          <h2>Results for "{props.props.query}"</h2>
	        }
	        { props.props.loading ?
	          /* Loading component in case the user clicks nav item before the componentWillMount script runs. */
	          <Loading /> :
	          props.props.gallery ?
	          /* A single Gallery component */
	          <GalleryContainer gallery={props.props.gallery}/> :
	          /* In case the user changes the nav_items array to be something that has no results I left this here. If it could be guaranteed that the user would not put an empty string or non-string value in the state then I could take this out. */
	          <NotFound />
	        }
	      </div>
	    </div>
	  </div>
);
