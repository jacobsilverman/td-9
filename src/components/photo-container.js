import React from 'react';
import '../styles/index.css';

let PhotoContainer = (props) => (
	<React.Fragment>
    	<li>
    		{console.log('url ',props.query)}
			<img src={props.url} alt="" />
		</li>
	</React.Fragment>
)

export default PhotoContainer;