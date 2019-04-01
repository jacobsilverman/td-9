import React, { Component } from 'react';
import '../styles/index.css';
import { Consumer } from '../context'
import SearchIcon from './search-icon'

class SearchBar extends Component {

	render(){
		return(
			<Consumer>
			{ ({query, actions}) => (
				<form 
					className="search-form" 
					onSubmit={() => actions.submitSearch()}>
				    <input 
				    	type="search" 
				    	name="search" 
				    	placeholder="Search" 
				    	required 
				    	// value={query}
				    	onChange={(e) => {
				    			e.preventDefault();
				    			// console.log('on change ', 
				    			// 	e.target.value)
				    			actions.changeSearch(e.target.value);
				    		}
				    	}/>
				    <button type="submit" 
				    	className="search-button">
				      	<SearchIcon />
				    </button>
				</form>
				)
			}
		  	</Consumer>
		)
	}
}

export default SearchBar;