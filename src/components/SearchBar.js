import React, { Component } from 'react';
import '../styles/index.css';

/* 
	Searchbar is a stateless form component for the search. The query string is passed up to higher components.
*/

export default (props) => (
	<form className="search-form">
	    <input 
	    	type="search" 
	    	name="search" 
	    	placeholder="Search" 
	    	required 
	    	value={props.query}
	    	onChange={(e) => props.handleQueryChange(e.target.value)}
	    	/>
	</form>
);