import React from 'react';
import '../styles/index.css';

/* 
	A simple stateless component to display when no results are found of a search.
*/

export default () => (
	<ul>
		<li className="not-found">
			<h3>No Results Found</h3>
			<p>You search did not return any results. Please try again.</p>
		</li>
	</ul>
);