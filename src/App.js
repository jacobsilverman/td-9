import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './styles/index.css';
import SearchBar from './components/search-bar';
import MainNav from './components/main-nav';
import GalleryContainer from './components/gallery-container';
import NotFound from './components/not-found';
import api_key from './config';
import { Provider } from './context';
import Loading from './components/loading';

class App extends Component {

  state = {
   gallery: [],
    query: '',
    loading: true,
  };

  /* 
    todo: preload and store gallery for nav-items
    cats, dogs, computers
  */

  /* 
    todo: 404 route
  */

  /* 
    todo: do all the controlled components need to be controlled or can they be changed to be pure components?
  */

  componentWillMount = () => {
    this.performSearch();
  }

  handleQueryChange = (query) => {
    // var url = new URL();
    
    this.setState( prevState => {
      return ({ ...prevState, query, loading: true });
    }, () => {
      this.performSearch();
      this.props.history.replace(`?search=${this.state.query}`)
    });
  }

  performSearch = () => {

    let fetch_url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&per_page=24&content_type=1&format=json&nojsoncallback=1&tags=`
    if (this.state.query) {
      fetch_url = fetch_url + `${this.state.query}`;
    } else {
      fetch_url = fetch_url + 'cats';
    }
    
    //https://www.flickr.com/services/api/misc.urls.html
    // console.log('performSearch url ', fetch_url);
    fetch(fetch_url)
      .then(res => res.json())
      .then(myJson => {
        const gallery = myJson.photos.photo;
        this.setState((prevState) => { 
          return ({...prevState, gallery, loading: false })
        })
      })
  }

  checkImage = () => {
    /* 
      todo: some images return net::ERR_NAME_NOTRESOLVED if an image returns that then should search for a new image
    */ 
    this.state.gallery.map(item => {
      const fetch_url = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    })
  }

  render() {
    return (
        <div className="body">
          <div className="container">
            <SearchBar 
              value={this.state.query} 
              onChange={this.handleQueryChange}/>
            <MainNav onChange={this.handleQueryChange}/>
            <div className="photo-container">
              <h2>Results</h2>
              { this.state.loading ?
                <Loading /> :
                this.state.gallery ?
                <GalleryContainer gallery={this.state.gallery}/> :
                <NotFound />
              }
            </div>
          </div>
        </div>
    );
  }
}

export default App;

 /*        */