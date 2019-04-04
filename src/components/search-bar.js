import React, { Component } from 'react';
import '../styles/index.css';
import { Consumer } from '../context'
import SearchIcon from './search-icon'

class SearchBar extends Component {
	/* 
		controlled component
	
	constructor(props) {
	    super(props);
	    
	}
	*/
	render(){
		return(
			<form 
				className="search-form">
			    <input 
			    	type="search" 
			    	name="search" 
			    	placeholder="Search" 
			    	required 
			    	value={this.props.value}
			    	onChange={(e) => this.props.onChange(e.target.value)}
			    	/>
			    <button type="submit" 
			    	className="search-button">
			      	<SearchIcon />
			    </button>
			</form>
		)
	}
}

export default SearchBar;