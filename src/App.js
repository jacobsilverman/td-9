import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import './styles/App.css';
import './styles/index.css';

import Search from './routes/Search';
import Nav1 from './routes/Nav1';
import Nav2 from './routes/Nav2';
import Nav3 from './routes/Nav3';
import NoMatch from './routes/NoMatch';

/* Import API key into your application */
import api_key from './config';

/* 
  I have kept and manage as much of the state and functionality as possible in src/App.js file, and passed data down to reusable stateless components with props via the render() method of Routes.
*/

class App extends Component {

  /* 
    This is the application state. You can change the 3 navigation terms here and they will propogate down to the nav-item component.
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
    /* perform a search on start */
    this.performSearch(this.state.nav_items[0]);
    /* preload the stock galleries for quick-loading when navigating */
    for (var i = 0; i < 3; i++) {
      this.performSearch(this.state.nav_items[i],i);
    }
  }

/* 
  handleQueryChange() is used to determine if the user wants to fetch new data by search (default) or navigate to one of the pre-loaded stock galleries (case 0-2). 
*/

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

/* 
  renderStock() saves the results of the fetch into the stock galleries array. The callback changes loading bool to false.
*/

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

/* 
  updateState() saves the data from the initial fetch to the relevant stock gallery.
*/

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

/* 
  Runs wen the user wants to perform a search.
*/

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

  /* 
    Render the routes and pass appropriate props and functions to downstream mostly stateless components.
  */

  render(){
  	return(
  		<Router>
		  	<Switch>
      {/* Search Route default is whatever term is in State nav_items Array Position 1 */}
				<Route 
          path="/search" 
          render={()=> 
            <Search 
              props={this.state}
              handleQueryChange={this.handleQueryChange}
              />
              } 
            />
        {/* Navigation Route 1 eg. Cats */}
				<Route 
          path={`/${this.state.nav_items[0]}`}
          render={()=> <Nav1 props={this.state} 
          handleQueryChange={this.handleQueryChange}
          />}/>
        {/* Navigation Route 2 eg. Dogs */}
				<Route 
          path={`/${this.state.nav_items[1]}`}
          render={()=> <Nav2 props={this.state}
          handleQueryChange={this.handleQueryChange}
          />}/>
        {/* Navigation Route 3 eg. Computers */}
				<Route 
          path={`/${this.state.nav_items[2]}`}
          render={()=> <Nav3 props={this.state}
          handleQueryChange={this.handleQueryChange}
          />}/>
        <Redirect exact from="/" to="/search" />
				{/* 404 route */}
				<Route component={NoMatch} />
		    </Switch>
		  </Router>
  	)
  }
}

export default App;