import React, { Component } from 'react';
import '../styles/index.css';
import { Consumer } from '../context'
import SearchIcon from './search-icon'

const SearchBar = (props) => {
	return(
		<form 
			className="search-form">
			{console.log('SearchBar ', props)}
		    <input 
		    	type="search" 
		    	name="search" 
		    	placeholder="Search" 
		    	required 
		    	value={props.query}
		    	onChange={(e) => props.onChange(e.target.value)}
		    	/>
		</form>
	)
}

export default SearchBar;