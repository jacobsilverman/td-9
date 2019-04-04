import React, { Component } from 'react';
import '../styles/index.css';
import { Consumer } from '../context'
import SearchIcon from './search-icon'

/* 
	A stateless form component for the search.
*/

export default (props) => (
	<form className="search-form">
	    <input 
	    	type="search" 
	    	name="search" 
	    	placeholder="Search" 
	    	required 
	    	value={props.query}
	    	onChange={(e) => props.onChange(e.target.value)}
	    	/>
	</form>
);