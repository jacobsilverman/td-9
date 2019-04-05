import React, { Fragment } from 'react';
/* Import Custom Components */
import GalleryContainer from '../components/GalleryContainer';
import NotFound from '../components/NotFound';
import Loading from '../components/Loading';
import SearchBar from '../components/SearchBar';
import MainNav from '../components/MainNav';

import '../styles/App.css';
import '../styles/index.css';

/* 
  A Header component containing nav and search bar. I decided not to put this in it's own file due to it's simplicity and it is different between search and nav. I did not include the Search bar in the nav1/2/3 routes because I thought it's not logical to have both in the nav-item route(s). I also put the buttons above the search bar because it is logical to me that if they exist in every route they should be on the top of the DOM.
*/

const Header = (props) => (
  <Fragment>
    <MainNav {...props}/>
    <SearchBar {...props} />
  </Fragment>
)

/* 
  Search is a stateless component that checks the loading boolean and either displays the loading component or the gallery component. A single Gallery Component iterates over a single Photo Container Component to display max 24 Photos in the Gallery.

  nb. The only downside to exporting stateless components without names is they appear as Unknown in chrome's React devtools.
*/

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
          /*  */
          <Loading /> :
          props.props.gallery ?
          /* A single Gallery component */
          <GalleryContainer gallery={props.props.gallery}/> :
          /*  */
          <NotFound />
        }
      </div>
    </div>
  </div>
)