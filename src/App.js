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

class App extends Component {

  componentDidMount = () => {
    this.performSearch();
  }

  handleSearch = (value) => {
      console.log('handleSearch value ', value);
      const gallery = this.state.gallery;
      const query = value;
      // const newquery = query + value;
      // this.state.query = tags;
      this.setState({
        gallery,
        query
      })
      console.log('handleSearch query ', query)
      // this.performSearch();
      }

  performSearch = () => {
    const fetch_url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${this.state.query}&per_page=24&content_type=1&format=json&nojsoncallback=1`
    console.log('performSearch url ', fetch_url);
    fetch(fetch_url)
      .then(res => res.json())
      .then(myJson => {
        const query = this.state.query;
        const gallery = myJson.photos.photo;
        console.log('performSearch gallery ', gallery);
        this.setState({
          query,
          gallery
        })
      })
  }
  
  state = {
   gallery: [
      {
        url: 'https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg',
        id: 1,
      },
      {
        url: 'https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg',
        id: 2,
      },
      {
        url: 'https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg',
        id: 3
      },
      {
        url: 'https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg',
        id: 4
      }
    ],
    query: 'cat'
  };

  render() {
    return (
      <Provider 
        value={{
          gallery: this.state.gallery,
          query: this.state.query,
          actions: {
            changeSearch: this.handleSearch,
            submitSearch: this.performSearch
          }}}>
        <div className="body">
          <div className="container">
            <SearchBar />
            <MainNav />
            <div className="photo-container">
              <h2>Results</h2>
              { this.state.gallery ?
                <GalleryContainer /> :
                <NotFound />
              }
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

 /*        */