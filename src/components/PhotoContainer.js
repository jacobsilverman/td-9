import React from 'react';
import '../styles/index.css';

/* 
	A single Gallery-item component that can be reused with iteration to display each list item and image.
*/

export default (props) => (
	<li>
		<img src={props.url} alt="" />
	</li>
);