import React from 'react';
/* Import Custom Components */
import GalleryContainer from '../components/GalleryContainer';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import MainNav from '../components/MainNav';

import '../styles/App.css';
import '../styles/index.css';

/* 
  A Header component containing nav bar only. 
*/

const Header = (props) => (
  <div>
    <MainNav {...props}/>
  </div>
)

/* 
	 Nav3 is a stateless component that is exactly like Nav1 and Nav 2 except that the stock gallery relates to nav_item 3 (not 1 or 2). I could probably have re-used one Route and Component in each of the 3 NavItem Routes but i thought that might not demonstrate the skills required to pass the project. We are rewquired to show that we can code multiple routes. 
*/

export default (props) => (
	<div className="body">
	    <div className="container">
	      <Header {...props}/>
	      <div className="photo-container">
	        <h2>Results</h2>
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
