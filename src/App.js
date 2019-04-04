import React, { Component, Fragment } from 'react';
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

const Header = (props) => {

  return (
      <Fragment>
        <SearchBar {...props} />
        <MainNav {...props}/>
      </Fragment>
  )
}


class App extends Component {

  /* 
    done: keep and manage as much of the state and functionality as possible in your src/App.js file, and pass data down to reusable stateless components with props.
  */

  state = {
    query: '',
    loading: true,
    nav_items: ['cats', 'dogs', 'computers'],
    gallery: [],
    stock: {
      0: [],
      1: [],
      2: []
    }
  };

  componentWillMount = () => {
    /* done: perform a search on start */
    this.performSearch(this.state.nav_items[0]);
    /* */
    for (var i = 0; i < 3; i++) {
      this.performSearch(this.state.nav_items[i],i);
    }
  }

  handleQueryChange = (query) => {
    this.setState( prevState => {
      return ({ ...prevState, query, loading: true });
    }, () => {
      switch (this.state.query) {
        case this.state.nav_items[0]:
          this.renderStock(0);
          break;
        case this.state.nav_items[1]:
          this.renderStock(1);
          break;
        case this.state.nav_items[2]:
          console.log('stock',this.state.stock)
          this.renderStock(2);
          break;
        default:
          this.performSearch(this.state.query);
      }
      
      /* 
        bonus: add this line if you want the URL to reflect search params
        this.props.history.replace(`?search=${this.state.query}`)
      */ 
    });
  }

  renderStock = (item_num) => {
    this.setState((prevState) => { 
            return (
              {...prevState, 
                gallery: this.state.stock[item_num], 
                loading: true 
              }
            )
          }, () => {
            this.setState((prevState) => { 
              return ({
                ...prevState, 
                loading: false 
              })
            })
          })
  }

  updateState = (index, prevState, data) => {
    return ({
      ...prevState,

      stock: {
        ...prevState.stock,
        [index]: data
      },
      loading: false
    });
  }

  performSearch = (query, dest) => {
    let fetch_url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&per_page=24&content_type=1&format=json&nojsoncallback=1&tags=`
    if (query) {
      fetch_url = fetch_url + `${query}`;
    } else {
      fetch_url = fetch_url + `${this.state.nav_items[0]}`;
    }
    fetch(fetch_url)
      .then(res => res.json())
      .then(myJson => {
        const data = myJson.photos.photo;
        this.setState((prevState) => { 
          switch (dest) {
            case 0 :
              return this.updateState(0, prevState, data);
            case 1 :
              return this.updateState(1, prevState, data);
            case 2 :
              return this.updateState(2, prevState, data);
            default:
              return ({ ...prevState, gallery: data, loading: false })
          }
        })
      });
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

        {/* A Header component that could store things like an app title, logo, nav and search bar. Remember, the mockups and index.html file are a guide for how the main components should be laid out, arranged, and positioned, but you can personalize your app by adding things like a tittle, logo, footer, etc.. */}

          <Header 
            query={this.state.query} 
            onChange={this.handleQueryChange} 
            items={this.state.nav_items}
            />


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